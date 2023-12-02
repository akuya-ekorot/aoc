import { BLUE_CUBES, GREEN_CUBES, RED_CUBES } from "./constants";
import { Game } from "./parse-input";

/**
 * @description determine possible games based on param games
 * @param {Game[]} games
 * @returns {Game[]} possible games
 */
export const possibleGames = (games: Game[]): Game[] => {
  return games.filter((game) => {
    return (
      game.sets.filter((set) => {
        let red: boolean;
        let green: boolean;
        let blue: boolean;

        set.red ? (red = set.red <= RED_CUBES) : (red = true);
        set.green ? (green = set.green <= GREEN_CUBES) : (green = true);
        set.blue ? (blue = set.blue <= BLUE_CUBES) : (blue = true);

        return red && blue && green;
      }).length === game.sets.length
    );
  });
};
