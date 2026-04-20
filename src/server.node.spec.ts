import { describe, expect, it } from "vitest";

const readRuntime = () => process.release.name;

describe("server project", () => {
  it("runs in node", () => {
    expect(readRuntime()).toBe("node");
  });
});
