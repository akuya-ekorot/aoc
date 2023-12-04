export function checkSymbol(
  start: number,
  end: number,
  row: number,
  matrix: string[][],
) {
  enum Direction {
    UP = 0,
    UP_LEFT = 1,
    LEFT = 2,
    DOWN_LEFT = 3,
    DOWN = 4,
    DOWN_RIGHT = 5,
    RIGHT = 6,
    UP_RIGHT = 7,
  }
  const directions: number[][] = [
    [0, -1], // up
    [-1, -1], // up left
    [-1, 0], // left
    [-1, 1], // down left
    [0, 1], // down
    [1, 1], // down right
    [1, 0], // right
    [1, -1], // up right
  ];

  for (let j = start; j < end; j++) {
    for (let i = 0; i < directions.length; i++) {
      // skip all up checks
      if (
        row === 0 &&
        (i === Direction.UP ||
          i === Direction.UP_LEFT ||
          i === Direction.UP_RIGHT)
      ) {
        continue;
      }

      // skip all left checks
      if (
        start === 0 &&
        (i === Direction.LEFT ||
          i === Direction.UP_LEFT ||
          i === Direction.DOWN_LEFT)
      ) {
        continue;
      }

      // skip all down checks
      if (
        row === matrix.length - 1 &&
        (i === Direction.DOWN_LEFT ||
          i === Direction.DOWN ||
          i === Direction.DOWN_RIGHT)
      ) {
        continue;
      }

      // skip all right checks
      if (
        end === matrix[row].length &&
        (i === Direction.RIGHT ||
          i === Direction.DOWN_RIGHT ||
          i === Direction.UP_RIGHT)
      ) {
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
