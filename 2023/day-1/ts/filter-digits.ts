import spelledDigits from "./spelled-digit";

const filterDigits: FilterDigits = (line, digits) => {
  let spell = false;
  let spelledDigit = "";

  for (let i = 0; i < line.length; i++) {
    if (!isNaN(+line[i])) {
      digits.push(line[i]);
      spell = false;
      spelledDigit = "";
    } else if (!spell && spelledDigits.isPrefix(line[i])) {
      spell = true;
      spelledDigit += line[i];
    } else if (spell && spelledDigits.isPrefix(spelledDigit + line[i])) {
      if (spelledDigits.search(spelledDigit + line[i])) {
        digits.push(getDigit[spelledDigit + line[i]].toString());

        spell = false;
        spelledDigit = "";
      } else {
        spelledDigit += line[i];
      }
    } else if (
      spell &&
      !spelledDigits.isPrefix(spelledDigit + line[i]) &&
      spelledDigits.isPrefix(line[i])
    ) {
      spelledDigit = line[i];
    } else {
      spell = false;
      spelledDigit = "";
    }
  }

  return digits;
};

export default filterDigits;

type FilterDigits = (line: string, digits: string[]) => string[];

const getDigit: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
