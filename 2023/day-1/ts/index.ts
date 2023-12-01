import getSumOfCalibrationValues from "./get-sum-of-calibration-values";
import readInput from "./read-input";

const input = await readInput("input.txt");
const sum = getSumOfCalibrationValues(input);

console.log(sum);
