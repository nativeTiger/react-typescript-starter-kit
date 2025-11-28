#!/usr/bin/env node

import degit from "degit";

const projectName = process.argv[2];

if (!projectName || projectName === "--help") {
  console.log("\nUsage: npx create-react-typescript-kit <project-name>\n");
  process.exit(projectName === "--help" ? 0 : 1);
}

// This is the magic: point directly to the template folder
const repo = "github:nativeTiger/react-typescript-starter-kit/template#master";

console.log(`\nCreating React + TypeScript project: ${projectName}\n`);

try {
  await degit(repo, { force: true }).clone(projectName);
  console.log("\nProject created successfully!");
  console.log("\nNext steps:");
  console.log(`   cd ${projectName}`);
  console.log(`   npm install   (or pnpm/yarn)`);
  console.log(`   npm run dev\n`);
} catch (err) {
  console.error("\nFailed:", err.message);
  process.exit(1);
}
