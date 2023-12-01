import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input";
import getSumOfCalibrationValues from "../get-sum-of-calibration-values";

let input: string[];

describe("getSumOfCalibrationValues", () => {
  beforeAll(async () => {
    input = await readInput("tests/test.txt");
  });

  test("gets correct sum", () => {
    expect(getSumOfCalibrationValues(input)).toBe(281);
  });
});
