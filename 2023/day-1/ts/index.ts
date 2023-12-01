import getSumOfCalibrationValues from "./getSumOfCalibrationValues";
import readInput from "./readInput";

const input = await readInput("input.txt");
const sum = getSumOfCalibrationValues(input);

console.log(sum);
