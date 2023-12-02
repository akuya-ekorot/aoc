import getCalibrationValue from "./get-calibration-value";

type GetSumOfCalibrationValues = (input: string[]) => number;

const getSumOfCalibrationValues: GetSumOfCalibrationValues = (input) => {
  return input.reduce((p, c) => {
    return p + getCalibrationValue(c);
  }, 0);
};

export default getSumOfCalibrationValues;
