import { directions } from "./constants";
import { findFullNumber2 } from "./find-full-number_2";
import { isAtEdge } from "./is-at-edge";

export function ifIsGear(pos: { x: number; y: number }, matrix: string[][]) {
  const numbers: number[] = [];
  const visited: { x: number; y: number }[] = [];

  for (let i = 0; i < directions.length; i++) {
    if (isAtEdge({ i, row: pos.x, start: pos.x, end: pos.x, matrix })) {
      continue;
    }

    const x = pos.x + directions[i][0];
    const y = pos.y + directions[i][1];

    const checking = matrix[y][x];

    const isVisited = visited.some((value) => value.x === x && value.y === y);

    if (!isNaN(+checking) && !isVisited) {
      numbers.push(
        findFullNumber2({
          x,
          y,
          matrix,
          visited,
        }),
      );
    }
  }

  return {
    isGear: numbers.length === 2,
    numbers,
    ratio: numbers.reduce((p, c) => p * c, 1),
  };
}
