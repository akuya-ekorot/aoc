import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input";
import { ifIsGear } from "../is-gear";

describe("if-is-gear", () => {
  let matrix: string[][];

  beforeAll(async () => {
    matrix = await readInput("tests/test-input.txt");
  });

  test("correctly finds a gear", () => {
    const { isGear, numbers, ratio } = ifIsGear({ x: 3, y: 1 }, matrix);

    expect(isGear).toBeTrue();
  });

  test("correctly finds a non-gear", () => {
    const { isGear, numbers, ratio } = ifIsGear({ x: 4, y: 4 }, matrix);

    expect(isGear).toBeFalse();
  });

  test("correctly finds a gear", () => {
    const { isGear, numbers, ratio } = ifIsGear({ x: 5, y: 8 }, matrix);

    expect(isGear).toBeTrue();
  });
});
