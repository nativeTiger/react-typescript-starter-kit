#!/usr/bin/env node
import degit from "degit";

const projectName = process.argv[2];

if (!projectName || projectName === "--help") {
  console.log(
    "\nUsage: npx @nativetiger/create-react-typescript-kit <project-name>\n"
  );
  process.exit(projectName === "--help" ? 0 : 1);
}

const repo = "github:nativeTiger/react-typescript-starter-kit#main";

console.log(`\nCreating React + TypeScript + Vite project: ${projectName}\n`);

degit(repo, {
  force: true,
  // This excludes the CLI package itself from appearing in new projects
  //@ts-ignore
  exclude: ["packages", "pnpm-workspace.yaml", ".github"],
})
  .clone(projectName)
  .then(() => {
    console.log(`\nProject created successfully!`);
    console.log(`\nNext steps:`);
    console.log(`   cd ${projectName}`);
    console.log(`   pnpm install`);
    console.log(`   pnpm run dev\n`);
  })
  .catch((err: any) => {
    console.error("\nFailed:", err.message);
    process.exit(1);
  });
