/**
 * Palindrome Permutation: Given a string, write a function to check if its a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of
 * letters. The palindrome does not need to be limited to just dictionary words
 */
const palindromePermutation = (s) => {
  s = s
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[a-z]/))
    .join("");
  const counter = createCounter(s);
  let odd = 0;

  for (const value of counter.values()) {
    if (value % 2 === 1) {
      odd++;
    }
  }

  return odd <= 1;
};

const createCounter = (s) => {
  const counter = new Map();

  for (const char of s) {
    if (counter.has(char)) {
      counter.set(char, counter.get(char) + 1);
    } else {
      counter.set(char, 1);
    }
  }

  return counter;
};

module.exports = { palindromePermutation };
