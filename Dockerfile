# =============================================================================
# Turborepo + pnpm + Next.js Standalone Dockerfile
# =============================================================================
# Usage:
#   docker build --build-arg APP_NAME=service -t dabom-service .
#   docker build --build-arg APP_NAME=admin   -t dabom-admin .
# =============================================================================

# -- Base --
FROM node:20-alpine AS base
RUN corepack enable pnpm

# -- Dependencies --
FROM base AS deps
WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/service/package.json ./apps/service/
COPY apps/admin/package.json ./apps/admin/
COPY packages/shared/package.json ./packages/shared/

RUN pnpm install --frozen-lockfile

# -- Builder --
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/ ./
COPY . .

ARG APP_NAME=service
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

RUN pnpm turbo build --filter=${APP_NAME}

# -- Runner --
FROM base AS runner
WORKDIR /app

RUN addgroup -S -g 1001 nodejs
RUN adduser -S -u 1001 nextjs
RUN apk add --no-cache wget

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

ARG APP_NAME=service

# standalone output contains the entire server
COPY --chown=nextjs:nodejs --from=builder /app/apps/${APP_NAME}/.next/standalone ./
COPY --chown=nextjs:nodejs --from=builder /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --chown=nextjs:nodejs --from=builder /app/apps/${APP_NAME}/public ./public

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
