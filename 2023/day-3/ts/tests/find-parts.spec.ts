import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input";
import { findParts } from "../find-parts";

describe("find-parts", () => {
  let matrix: string[][];

  beforeAll(async () => {
    matrix = await readInput("tests/test-input.txt");
  });

  test("returns all parts", () => {
    const parts = findParts(matrix);

    expect(parts.length).toBe(8);
    expect(parts).toEqual([467, 35, 633, 617, 592, 755, 664, 598]);
  });
});
