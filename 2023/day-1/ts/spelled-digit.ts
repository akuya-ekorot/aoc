interface Node {
  children: Record<string, Node>;
  isEndOfWord: boolean;
}

interface Trie {
  root: Node;
  insert: (word: string) => void;
  search: (word: string) => boolean;
  isPrefix: (prefix: string) => boolean;
}

const spelledDigits: Trie = {
  root: { children: {}, isEndOfWord: false },
  insert: (word) => {
    let node = spelledDigits.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!node.children[char]) {
        node.children[char] = { isEndOfWord: false, children: {} };
      }

      node = node.children[char];
    }

    node.isEndOfWord = true;
  },
  isPrefix: (prefix) => {
    let node = spelledDigits.root;

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];

      if (!node.children[char]) {
        return false;
      }

      node = node.children[char];
    }

    return true;
  },
  search: (word) => {
    let node = spelledDigits.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        return false;
      }

      node = node.children[char];
    }

    return node.isEndOfWord;
  },
};

[
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach((word) => spelledDigits.insert(word));

export default spelledDigits;
