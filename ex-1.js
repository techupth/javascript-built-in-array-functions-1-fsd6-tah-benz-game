let words = ["hello", "world"];

function getWordLengths(stringInWord) {
  return stringInWord.length;
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
