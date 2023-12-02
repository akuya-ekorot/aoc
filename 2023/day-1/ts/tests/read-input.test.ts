import { beforeAll, describe, expect, test } from "bun:test";
import readInput from "../read-input.ts";

let fileName: string;
let result: string[];

describe("readInput", () => {
  beforeAll(() => {
    fileName = "tests/test.txt";
  });

  test("to return list of strings from text file", async () => {
    result = await readInput(fileName);

    expect(result.length).toBe(8);
    expect(result).toBeArray();
    expect(result[0]).toBeString();
  });
});
