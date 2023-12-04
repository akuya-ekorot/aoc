import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input";
import { checkSymbol } from "../check-symbols";

describe("check symbol", () => {
  let matrix: string[][];

  beforeAll(async () => {
    matrix = await readInput("tests/test-input.txt");
  });

  test("accurately identifies a non-part", () => {
    const isNumber = checkSymbol(5, 8, 0, matrix);
    expect(isNumber).toBeFalse();
  });

  test("accurately a part", () => {
    const isNumber = checkSymbol(2, 4, 2, matrix);
    expect(isNumber).toBeTrue();
  });

  test("accurately a part", () => {
    const isNumber = checkSymbol(0, 3, 0, matrix);
    expect(isNumber).toBeTrue();
  });

  test("accurately a part", () => {
    const isNumber = checkSymbol(6, 9, 2, matrix);
    expect(isNumber).toBeTrue();
  });

  test("accurately a non-part", () => {
    const isNumber = checkSymbol(7, 9, 5, matrix);
    expect(isNumber).toBeFalse();
  });

  test("accurately a part", () => {
    const isNumber = checkSymbol(5, 8, 9, matrix);
    expect(isNumber).toBeTrue();
  });
});
