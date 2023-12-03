import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input";
import { findFullNumber } from "../find-full-number";

describe("find-full-number", () => {
  let matrix: string[][];

  beforeAll(async () => {
    matrix = await readInput("tests/test-input.txt");
  });

  test("finds full number", () => {
    const { number, range } = findFullNumber({ x: 0, y: 0 }, matrix);

    expect(number).toBe(467);
    expect(range).toEqual({ x1: 0, x2: 3 });
  });

  test("finds full number", () => {
    const { number, range } = findFullNumber({ x: 6, y: 2 }, matrix);

    expect(number).toBe(633);
    expect(range).toEqual({ x1: 6, x2: 9 });
  });
});
