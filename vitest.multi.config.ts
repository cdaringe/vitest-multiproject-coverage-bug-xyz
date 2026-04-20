import { defineConfig } from "vitest/config";
import { sharedCoverage } from "./vitest.shared";

export default defineConfig({
  test: {
    globals: true,
    coverage: sharedCoverage,
    projects: [
      {
        extends: true,
        test: {
          name: "browser",
          environment: "jsdom",
          include: [
            "src/**/*.{test,spec}.ts?(x)",
            "!src/**/*.node.{test,spec}.ts",
            "!src/**/*.happydom.{test,spec}.ts?(x)",
          ],
        },
      },
      {
        extends: true,
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.node.{test,spec}.ts"],
        },
      },
    ],
  },
});
