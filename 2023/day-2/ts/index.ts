import { parseInput } from "./parse-input";
import { possibleGames } from "./possible-games";
import readInput from "./read-input";
import { sumPossibleGames } from "./sum-possible-games";

async function main() {
  const input = await readInput("input.txt");
  const games = parseInput(input);
  const possible = possibleGames(games);
  const sum = sumPossibleGames(possible);

  console.log(sum);
}

main();
