import { ifIsGear } from "./is-gear";

export function findGearRatio(matrix: string[][]) {
  const ratios: number[] = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === "*") {
        const { ratio, isGear } = ifIsGear({ x, y }, matrix);

        if (isGear) {
          ratios.push(ratio);
        }
      }
    }
  }

  return ratios.reduce((p, c) => p + c, 0);
}
