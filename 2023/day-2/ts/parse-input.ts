import readInput from "./read-input";

export type Set = {
  red: number | null;
  green: number | null;
  blue: number | null;
};

export type Game = {
  id: number;
  sets: Set[];
};

/**
 * @description parseInput takes in the input from the file
 * parses it and returns a list of games with the list of sets
 * revealed during the games.
 * @param {string[]} lines The input from the file.
 * @returns {Game[]} games
 */
export const parseInput = (lines: string[]): Game[] => {
  const games: Game[] = [];

  for (let line of lines) {
    const split = line.split(":");

    const [_, id] = split[0].split(" ");

    const sets = split[1].split(";").map((set) => {
      const redPattern = /(\d*) red/.exec(set);
      const greenPattern = /(\d*) green/.exec(set);
      const bluePattern = /(\d*) blue/.exec(set);

      return {
        red: redPattern ? +redPattern[1] : null,
        green: greenPattern ? +greenPattern[1] : null,
        blue: bluePattern ? +bluePattern[1] : null,
      };
    });

    games.push({
      id: +id,
      sets,
    });
  }

  return games;
};
