import { beforeAll, describe, expect, test } from "bun:test";
import getCalibrationValue from "../getCalibrationValue.v1";

describe("get calibration value", () => {
  test("returns number", () => {
    expect(getCalibrationValue("1abc2")).toBeNumber();
  });

  test("returns correct calibration value", () => {
    expect(getCalibrationValue("1abc2")).toBe(12);
    expect(getCalibrationValue("pqr3stu8vwx")).toBe(38);
    expect(getCalibrationValue("treb7uchet")).toBe(77);
  });
});
