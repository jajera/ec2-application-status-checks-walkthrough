import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/properties/**/*.test.ts"],
  },
});
