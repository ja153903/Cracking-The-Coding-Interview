/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters
 * What if you cannot use additional data structures?
 */
const isUnique = (s) => {
  const seen = new Set();

  for (const char of s) {
    if (seen.has(char)) {
      return false;
    }

    seen.add(char);
  }

  return true;
};

// if we cannot use a data structure, then we'd have to resort to using an algorithm
// with quadratic complexity.
const isUniqueSpaceOptimal = (s) => {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = { isUnique, isUniqueSpaceOptimal };
