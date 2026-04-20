import { defineConfig } from "vitest/config";

export const sharedCoverage = {
  enabled: true,
  provider: "istanbul" as const,
  include: ["src/math.ts"],
  reporter: [["cobertura", { file: "cobertura.xml" }], "text-summary", "json"],
};

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["test-setup/common.ts"],
    coverage: sharedCoverage,
  },
});
