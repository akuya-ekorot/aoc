type ReadInput = (fileName: string) => Promise<string[]>;

const readInput: ReadInput = async (fileName) => {
  // read file
  const file = Bun.file(`${import.meta.dir}/${fileName}`);

  // retrieve string content of file
  const inputString = await file.text();

  // split string to list, new line delimited
  const inputList = inputString.split("\n");

  // if last line is empty string
  if (!inputList[inputList.length - 1]) {
    // remove empty item from list
    inputList.pop();
  }

  // return inputList
  return inputList;
};

export default readInput;
