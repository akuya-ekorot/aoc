import { findGearRatio } from "./find-gear-ratios";
import { findParts } from "./find-parts";
import readInput from "./read-input";

const matrix = await readInput("input.txt");
const parts = findParts(matrix);

const sum = parts.reduce((p, c) => p + c, 0);

console.log(sum);

const sumOfGearRatios = findGearRatio(matrix);

console.log(sumOfGearRatios);
