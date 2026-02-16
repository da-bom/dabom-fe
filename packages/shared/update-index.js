import { existsSync, readdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, "src");
const mainIndexFile = join(srcDir, "index.ts");
const directories = ["components", "utils", "hooks", "assets/icons"];

let mainIndexContent = "";

directories.forEach((dir) => {
  const dirPath = join(srcDir, dir);
  if (!existsSync(dirPath)) return;

  const files = readdirSync(dirPath).filter(
    (file) =>
      (file.endsWith(".tsx") || file.endsWith(".ts")) && file !== "index.ts",
  );

  if (dir === "assets/icons") {
    // 1. 아이콘 폴더 내부에 index.ts 생성
    const iconIndexContent = files
      .map((file) => {
        const name = file.replace(/\.(tsx|ts)$/, "");
        return `export { default as ${name} } from "./${name}";`;
      })
      .join("\n");

    writeFileSync(join(dirPath, "index.ts"), iconIndexContent);
    console.log("✅ [Icons] assets/icons/index.ts 생성 완료!");

    // 2. 메인 index에는 폴더 통째로 export
    mainIndexContent += `export * from "./${dir}";\n`;
  } else {
    // 3. 나머지는 기존 방식대로 메인 index에 추가
    files.forEach((file) => {
      const name = file.replace(/\.(tsx|ts)$/, "");
      mainIndexContent += `export { default as ${name} } from "./${dir}/${name}";\n`;
    });
  }
});

writeFileSync(mainIndexFile, mainIndexContent);
console.log("✅ [Main] src/index.ts 업데이트 완료!");
