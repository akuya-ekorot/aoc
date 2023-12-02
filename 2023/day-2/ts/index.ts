import { minimumSets } from "./minimum-sets";
import { parseInput } from "./parse-input";
import { possibleGames } from "./possible-games";
import readInput from "./read-input";
import { sumPossibleGames } from "./sum-possible-games";
import { sumPowerOfSets } from "./sum-power-of-sets";

async function main() {
  const input = await readInput("input.txt");
  const games = parseInput(input);
  const possible = possibleGames(games);
  const sum = sumPossibleGames(possible);

  /* puzzle 1 */
  console.log(sum);

  const minSets = minimumSets(games);
  const power = sumPowerOfSets(minSets);

  /* puzzle 2 */
  console.log(power);
}

main();
