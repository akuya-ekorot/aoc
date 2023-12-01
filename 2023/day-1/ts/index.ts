import getCalibrationValue from "./getCalibrationValue.v1";
import readInput from "./readInput";

const input = await readInput("input.txt");

const calibrationValueSum = input.reduce(
  (p, c) => p + getCalibrationValue(c),
  0,
);

console.log(calibrationValueSum);
