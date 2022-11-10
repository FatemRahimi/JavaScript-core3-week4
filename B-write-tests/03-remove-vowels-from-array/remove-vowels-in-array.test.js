let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  const words = ['aeiuo', 'beeli', 'barath', 'apple'];
  const expectedAnswer = ['', 'bl', 'brth', 'ppl'];
  const receivedAnswer = removeVowelsFromWords(words);
  expect(receivedAnswer).toEqual(expectedAnswer);
  
  
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
