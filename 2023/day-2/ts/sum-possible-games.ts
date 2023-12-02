import { Game } from "./parse-input";

/**
 * @description returns the sum of all possibleGames
 * @param {Game[]} possibleGames
 * @returns {number} sum
 */
export const sumPossibleGames = (possibleGames: Game[]): number => {
  return possibleGames.reduce((p, c) => p + c.id, 0);
};
