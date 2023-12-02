import spelledDigits from "./spelled-digit";

const filterDigits: FilterDigits = (line, digits) => {
  let isSpelling = false;
  let spelledDigit = "";

  for (let i = 0; i < line.length; i++) {
    const isNumber = !isNaN(+line[i]);
    const isSpelledDigitPrefix = spelledDigits.isPrefix(spelledDigit + line[i]);
    const isSpelledDigitValid = spelledDigits.search(spelledDigit + line[i]);
    const isCharPrefix = spelledDigits.isPrefix(line[i]);

    if (isNumber) {
      digits.push(line[i]);
      isSpelling = false;
      spelledDigit = "";
    } else if (!isSpelling && isSpelledDigitPrefix) {
      isSpelling = true;
      spelledDigit += line[i];
    } else if (isSpelling && isSpelledDigitPrefix) {
      if (isSpelledDigitValid) {
        digits.push(getDigit[spelledDigit + line[i]].toString());
        if (isCharPrefix) {
          isSpelling = true;
          spelledDigit = line[i];
        } else {
          isSpelling = false;
          spelledDigit = "";
        }
      } else {
        spelledDigit += line[i];
      }
    } else if (isSpelling && !isSpelledDigitPrefix && isCharPrefix) {
      spelledDigit = line[i];
    } else {
      isSpelling = false;
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
