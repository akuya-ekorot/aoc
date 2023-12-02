import { beforeAll, describe, expect, test } from "bun:test";
import { Game, parseInput } from "../parse-input";
import readInput from "../read-input";
import { minimumSets } from "../minimum-sets";

describe("minimum set", () => {
  let games: Game[];

  beforeAll(async () => {
    const input = await readInput("tests/test-input.txt");
    games = parseInput(input);
  });

  test("returns minimum sets", () => {
    const minSets = minimumSets(games);

    expect(minSets).toEqual([
      {
        red: 4,
        green: 2,
        blue: 6,
      },
      {
        red: 1,
        green: 3,
        blue: 4,
      },
      {
        red: 20,
        green: 13,
        blue: 6,
      },
      {
        red: 14,
        green: 3,
        blue: 15,
      },
      {
        red: 6,
        green: 3,
        blue: 2,
      },
    ]);
  });
});
