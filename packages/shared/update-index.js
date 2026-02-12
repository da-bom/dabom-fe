const fs = require("fs");
const path = require("path");

const iconDir = path.join(__dirname, "src/assets/icons");

try {
  const files = fs
    .readdirSync(iconDir)
    .filter((f) => f.endsWith(".tsx") && f !== "index.tsx")
    .map((f) => f.replace(".tsx", ""));

  const content = files
    .map((f) => `export { default as ${f} } from './${f}';`)
    .join("\n");

  fs.writeFileSync(path.join(iconDir, "index.ts"), content + "\n");
  console.log("✅ index.ts has been updated safely!");
} catch (err) {
  console.error("❌ Failed to update index.ts:", err);
}
