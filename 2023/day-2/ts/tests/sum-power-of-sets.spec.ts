import { beforeAll, describe, expect, test } from "bun:test";
import { Set, parseInput } from "../parse-input";
import readInput from "../read-input";
import { minimumSets } from "../minimum-sets";
import { sumPowerOfSets } from "../sum-power-of-sets";

describe("sum power of sets", () => {
  let sets: Set[];

  beforeAll(async () => {
    const input = await readInput("tests/test-input.txt");
    const games = parseInput(input);
    sets = minimumSets(games);
  });

  test("returns correct sum", () => {
    const sum = sumPowerOfSets(sets);
    expect(sum).toBe(2286);
  });
});
