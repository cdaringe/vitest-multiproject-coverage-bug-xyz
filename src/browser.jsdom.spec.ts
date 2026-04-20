import { describe, expect, it } from "vitest";
import { addOne } from "./math";

describe("browser project", () => {
  it("covers a shared module in jsdom", () => {
    expect(addOne(1)).toBe(2);
    expect(window.location.href).toContain("http");
  });
});
