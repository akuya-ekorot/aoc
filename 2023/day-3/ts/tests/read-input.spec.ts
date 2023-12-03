import { describe, expect, test } from "bun:test";
import readInput from "../read-input";

describe("read-input", () => {
  test("returns correct input parsed to a matrix", async () => {
    const matrix = await readInput("tests/test-input.txt");

    expect(matrix).toBeArray();
    expect(matrix[0]).toBeArray();
  });
});
