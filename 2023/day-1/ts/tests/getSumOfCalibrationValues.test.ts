import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../readInput";
import getSumOfCalibrationValues from "../getSumOfCalibrationValues";

let input: string[];

describe("getSumOfCalibrationValues", () => {
  beforeAll(async () => {
    input = await readInput("tests/test.txt");
  });

  test("gets correct sum", () => {
    expect(getSumOfCalibrationValues(input)).toBe(281);
  });
});
