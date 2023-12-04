export function findFullNumber(
  pos: { x: number; y: number },
  matrix: string[][],
) {
  let num: string = "";

  let i = pos.x;
  for (; i < matrix[pos.y].length; i++) {
    if (!isNaN(+matrix[pos.y][i])) {
      num += matrix[pos.y][i];
      continue;
    }

    break;
  }

  return {
    number: +num,
    i,
  };
}
