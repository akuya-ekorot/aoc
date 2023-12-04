export enum Direction {
  UP,
  UP_LEFT,
  LEFT,
  DOWN_LEFT,
  DOWN,
  DOWN_RIGHT,
  RIGHT,
  UP_RIGHT,
}
export const directions: number[][] = [
  [0, -1], // up
  [-1, -1], // up left
  [-1, 0], // left
  [-1, 1], // down left
  [0, 1], // down
  [1, 1], // down right
  [1, 0], // right
  [1, -1], // up right
];
