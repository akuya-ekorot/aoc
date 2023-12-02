import { Set } from "./parse-input";

/**
 * @function sumPowerOfSets
 * @description returns the sum of powers of sets provided
 * @param {Set[]} sets
 * @returns {number} sum of powers
 */
export function sumPowerOfSets(sets: Set[]): number {
  return sets.reduce(
    (p, c) =>
      p + (c.red ? c.red : 0) * (c.green ? c.green : 0) * (c.blue ? c.blue : 0),
    0,
  );
}
