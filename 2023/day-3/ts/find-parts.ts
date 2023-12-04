import { checkSymbol } from "./check-symbols";
import { findFullNumber } from "./find-full-number";

export function findParts(matrix: string[][]) {
  const parts: number[] = [];

  // loop through the matrix
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (!isNaN(+matrix[y][x])) {
        const { number, i } = findFullNumber({ x, y }, matrix);
        const isPart = checkSymbol(x, i, y, matrix);

        if (isPart) {
          parts.push(number);
        }

        x = i - 1;
      }
    }
  }

  return parts;
}
