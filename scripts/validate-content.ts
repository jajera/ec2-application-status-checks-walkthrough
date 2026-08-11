import { execSync } from "node:child_process";

let failed = false;

console.log("Running prettier --check ...");
try {
  execSync("npx prettier --check .", { stdio: "inherit" });
  console.log("✓ Prettier check passed\n");
} catch {
  console.error("✗ Prettier check failed\n");
  failed = true;
}

console.log('Running markdownlint-cli2 "src/**/*.mdx" ...');
try {
  execSync('npx markdownlint-cli2 "src/**/*.mdx"', { stdio: "inherit" });
  console.log("✓ Markdownlint check passed\n");
} catch {
  console.error("✗ Markdownlint check failed\n");
  failed = true;
}

if (failed) {
  console.error("Validation failed.");
  process.exit(1);
} else {
  console.log("All checks passed.");
}
