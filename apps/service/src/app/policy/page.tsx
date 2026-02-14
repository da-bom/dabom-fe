import { formatSize } from "@shared";

import MemberCard from "@service/components/MemberCard";

import { FAMILY_DETAIL } from "../../../../../packages/shared/src/data/familyDetail";

const DANGER_USAGE_THRESHOLD = 90;

export default function PolicyManagementPage() {
  const { customers } = FAMILY_DETAIL;

  return (
    <section className="flex w-full bg-background-base">
      <div className="mb-4 mt-4 w-full px-4">
        <h2 className="mb-4 text-body1-m text-brand-black">
          변경을 원하는 구성원을 선택하세요.
        </h2>

        <ul className="flex flex-col gap-4">
          {customers.map((customer) => {
            const rawUsed = customer.monthlyUsedBytes;
            const rawLimit = customer.monthlyLimitBytes;

            const formattedUsed = formatSize(rawUsed);
            const formattedLimit = formatSize(rawLimit);

            const percent =
              rawLimit === 0 ? 0 : Math.min((rawUsed / rawLimit) * 100, 100);

            const isDanger = percent >= DANGER_USAGE_THRESHOLD;

            return (
              <MemberCard
                key={customer.customerId}
                name={customer.name}
                phoneNumber="010-****-1234"
                usedAmount={formattedUsed.total}
                totalAmount={formattedLimit.total}
                usagePercent={percent}
                isDanger={isDanger}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
