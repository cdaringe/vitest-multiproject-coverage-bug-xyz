import { defineConfig } from "vitest/config";
import { sharedCoverage } from "./vitest.shared";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/browser.jsdom.spec.ts"],
    environment: "jsdom",
    coverage: sharedCoverage,
  },
});
