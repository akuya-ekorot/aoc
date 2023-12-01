import { beforeAll, describe, expect, test } from "bun:test";
import filterDigits from "../filterDigits";

describe("filterDigits", () => {
  test("finds spelled digits", () => {
    const line = "one1two";
    expect(filterDigits(line, [])).toEqual(["1", "1", "2"]);
  });

  test("finds spelled digits", () => {
    const line = "eightwothree";
    expect(filterDigits(line, [])).toEqual(["8", "3"]);
  });
});
