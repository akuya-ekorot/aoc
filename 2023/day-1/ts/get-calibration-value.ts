import filterDigits from "./filter-digits";

type GetCalibrationValue = (line: string) => number;

const getCalibrationValue: GetCalibrationValue = (line) => {
  const numbers = filterDigits(line, []);

  return Number(numbers[0] + numbers[numbers.length - 1]);
};

export default getCalibrationValue;
