/**
 * Reads a file and returns a list of strings representing each line
 * @param {string} fileName path to the file from the root of the project
 * @returns {Promise<string[]>} a list of each line in the file
 */
const readInput = async (fileName: string): Promise<string[]> => {
  const file = Bun.file(`${import.meta.dir}/${fileName}`);

  const inputString = await file.text();

  const inputList = inputString.split("\n");

  if (!inputList[inputList.length - 1]) {
    inputList.pop();
  }

  return inputList;
};

export default readInput;
