import { describe, expect, it } from "vitest";
import { runtimeName } from "./runtime";

describe("server project", () => {
  it("runs in node", () => {
    expect(runtimeName()).toBe("node");
  });
});
