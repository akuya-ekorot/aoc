import { describe, expect, test } from "bun:test";
import readInput from "../read-input";

describe("read-input", () => {
  test("reads input correctly", async () => {
    const input = await readInput("tests/test-input.txt");
    expect(input).toBeArray();
    expect(input[0]).toBeString();
  });
});
