import { Direction, directions } from "./constants";
import { isAtEdge } from "./is-at-edge";

export function checkSymbol(
  start: number,
  end: number,
  row: number,
  matrix: string[][],
) {
  for (let j = start; j < end; j++) {
    for (let i = 0; i < directions.length; i++) {
      if (isAtEdge({ i, row, start, end, matrix })) {
        continue;
      }

      const cell = matrix[row + directions[i][1]][j + directions[i][0]];

      if (cell !== "." && isNaN(+cell)) {
        return true;
      }
    }
  }

  return false;
}
