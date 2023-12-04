import { Direction } from "./constants";

export function isAtEdge({
  i,
  row,
  start,
  end,
  matrix,
}: {
  i: number;
  row: number;
  start: number;
  end: number;
  matrix: string[][];
}): boolean {
  // skip all up checks
  if (
    row === 0 &&
    (i === Direction.UP || i === Direction.UP_LEFT || i === Direction.UP_RIGHT)
  ) {
    return true;
  }

  // skip all left checks
  if (
    start === 0 &&
    (i === Direction.LEFT ||
      i === Direction.UP_LEFT ||
      i === Direction.DOWN_LEFT)
  ) {
    return true;
  }

  // skip all down checks
  if (
    row === matrix.length - 1 &&
    (i === Direction.DOWN_LEFT ||
      i === Direction.DOWN ||
      i === Direction.DOWN_RIGHT)
  ) {
    return true;
  }

  // skip all right checks
  if (
    end === matrix[row].length &&
    (i === Direction.RIGHT ||
      i === Direction.DOWN_RIGHT ||
      i === Direction.UP_RIGHT)
  ) {
    return true;
  }

  return false;
}
