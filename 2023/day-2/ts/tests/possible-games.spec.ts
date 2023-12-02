import { beforeAll, describe, expect, test } from "bun:test";
import { Game, parseInput } from "../parse-input";
import readInput from "../read-input";
import { possibleGames } from "../possible-games";

describe("possble games", () => {
  let games: Game[];

  beforeAll(async () => {
    const input = await readInput("tests/test-input.txt");
    games = parseInput(input);
  });

  test("returns all possible games", () => {
    const possible = possibleGames(games);

    console.log(possible);

    expect(possible).toBeArray();
    expect(possible.length).toBe(3);
  });
});
