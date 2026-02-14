const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");
const indexFile = path.join(srcDir, "index.ts");

const directories = ["components", "utils", "hooks", "assets/icons"];

let content = "";

directories.forEach((dir) => {
  const dirPath = path.join(srcDir, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      if (
        (file.endsWith(".tsx") || file.endsWith(".ts")) &&
        file !== "index.ts"
      ) {
        const name = file.replace(/\.(tsx|ts)$/, "");

        content += `export { default as ${name} } from "./${dir}/${name}";\n`;
      }
    });
  }
});

fs.writeFileSync(indexFile, content);
console.log("✅ [Default 포함] src/index.ts 업데이트 완료!");
