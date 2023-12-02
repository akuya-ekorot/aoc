import { beforeAll, describe, expect, test } from "bun:test";
import { Game, parseInput } from "../parse-input";
import readInput from "../read-input";
import { sumPossibleGames } from "../sum-possible-games";
import { possibleGames } from "../possible-games";

describe("sum possible games", () => {
  let possible: Game[];

  beforeAll(async () => {
    const input = await readInput("tests/test-input.txt");
    const games = parseInput(input);
    possible = possibleGames(games);
  });

  test("returns correct sum", () => {
    const sum = sumPossibleGames(possible);
    expect(sum).toBe(8);
  });
});
