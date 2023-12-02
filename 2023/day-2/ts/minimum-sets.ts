import { Game, Set } from "./parse-input";

/**
 * @function minimumSets
 * @description returns the minimum sets of cubes
 * @param {Game[]} games
 * @returns {Set[]} minimum sets
 */
export function minimumSets(games: Game[]): Set[] {
  const minSets: Set[] = [];

  for (let game of games) {
    minSets.push({
      red: Math.max(...game.sets.map((set) => (set.red ? set.red : 0))),
      green: Math.max(...game.sets.map((set) => (set.green ? set.green : 0))),
      blue: Math.max(...game.sets.map((set) => (set.blue ? set.blue : 0))),
    });
  }

  return minSets;
}
