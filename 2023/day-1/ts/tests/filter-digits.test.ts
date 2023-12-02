import { describe, expect, test } from "bun:test";
import filterDigits from "../filter-digits";

describe("filterDigits", () => {
  test("finds spelled digits", () => {
    const line = "one1two";
    expect(filterDigits(line, [])).toEqual(["1", "1", "2"]);
  });

  test("finds spelled digits 8 2 3", () => {
    const line = "eightwothree";
    expect(filterDigits(line, [])).toEqual(["8", "2", "3"]);
  });

  test("finds 7 6", () => {
    const line = "sevensix";
    expect(filterDigits(line, [])).toEqual(["7", "6"]);
  });

  test("finds 9 1 8", () => {
    const line = "9zjkckhxoneightbnj";
    expect(filterDigits(line, [])).toEqual(["9", "1", "8"]);
  });

  test("finds all digits", () => {
    const line = "oneninesixtwo26";
    expect(filterDigits(line, [])).toEqual(["1", "9", "6", "2", "2", "6"]);
  });

  test("oneightwoneight is 1 8 2 1 8", () => {
    const line = "oneightwoneight";
    expect(filterDigits(line, [])).toEqual(["1", "8", "2", "1", "8"]);
  });
});
