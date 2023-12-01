type GetCalibrationValue = (line: string) => number;

const getCalibrationValue: GetCalibrationValue = (line) => {
  const numbers = line.split("").filter((c) => !isNaN(+c));

  return Number(numbers[0] + numbers[numbers.length - 1]);
};

export default getCalibrationValue;
