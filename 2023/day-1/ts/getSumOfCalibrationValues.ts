import getCalibrationValue from "./getCalibrationValue";

type GetSumOfCalibrationValues = (input: string[]) => number;

const getSumOfCalibrationValues: GetSumOfCalibrationValues = (input) => {
  return input.reduce((p, c) => p + getCalibrationValue(c), 0);
};

export default getSumOfCalibrationValues;
