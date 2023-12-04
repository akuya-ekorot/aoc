import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input";
import { findFullNumber2 } from "../find-full-number_2";

describe("find-full-number", () => {
  let matrix: string[][];

  beforeAll(async () => {
    matrix = await readInput("tests/test-input.txt");
  });

  test("finds full number", () => {
    const number = findFullNumber2({ x: 0, y: 0, matrix, visited: [] });

    expect(number).toBe(467);
  });

  test("finds full number", () => {
    const number = findFullNumber2({ x: 6, y: 2, matrix, visited: [] });

    expect(number).toBe(633);
  });
});
