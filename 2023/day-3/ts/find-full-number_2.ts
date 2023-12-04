export function findFullNumber2({
  x,
  y,
  matrix,
  visited,
}: {
  x: number;
  y: number;
  matrix: string[][];
  visited: { x: number; y: number }[];
}) {
  const numbers: number[] = [+matrix[y][x]];

  // right
  for (let i = x - 1; i >= 0; i--) {
    if (!isNaN(+matrix[y][i])) {
      numbers.unshift(+matrix[y][i]);
      visited.push({ y, x: i });
    } else {
      visited.push({ y, x: i });
      break;
    }
  }

  // left
  for (let i = x + 1; x < matrix[y].length; i++) {
    if (!isNaN(+matrix[y][i])) {
      numbers.push(+matrix[y][i]);
      visited.push({ y, x: i });
    } else {
      visited.push({ y, x: i });
      break;
    }
  }

  return +numbers.join("");
}
