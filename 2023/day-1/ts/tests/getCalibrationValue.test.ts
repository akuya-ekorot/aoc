import { beforeAll, describe, expect, test } from "bun:test";
import getCalibrationValue from "../getCalibrationValue";

describe("get calibration value", () => {
  test("returns number", () => {
    expect(getCalibrationValue("1abc2")).toBeNumber();
  });

  test("returns correct calibration value", () => {
    expect(getCalibrationValue("1abc2")).toBe(12);
    expect(getCalibrationValue("pqr3stu8vwx")).toBe(38);
    expect(getCalibrationValue("treb7uchet")).toBe(77);
  });

  test("returns correct calibration value with spelled digits", () => {
    expect(getCalibrationValue("two1nine")).toBe(29);
    expect(getCalibrationValue("eightwothree")).toBe(83);
    expect(getCalibrationValue("abcone2threexyz")).toBe(13);
    expect(getCalibrationValue("xtwone3four")).toBe(24);
    expect(getCalibrationValue("4nineeightseven2")).toBe(42);
    expect(getCalibrationValue("zoneight234")).toBe(14);
    expect(getCalibrationValue("7pqrstsixteen")).toBe(76);
  });
});
