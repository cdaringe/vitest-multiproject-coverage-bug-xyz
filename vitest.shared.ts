import { defineConfig, ViteUserConfig } from "vitest/config";

const reporter: Required<Required<Required<ViteUserConfig>['test']>['coverage']>['reporter'] = [["cobertura" as const, { file: "cobertura.xml" }], "text-summary" as const, "json" as const];

export const sharedCoverage = {
  enabled: true,
  provider: "istanbul" as const,
  include: ["src/math.ts"],
  reporter,
};

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["test-setup/common.ts"],
    coverage: sharedCoverage,
  },
});
