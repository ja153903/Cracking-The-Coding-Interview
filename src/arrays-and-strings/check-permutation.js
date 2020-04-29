/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 */
const isPermutation = (s, t) => {
  if (s === t) {
    return true;
  }

  if (s.length !== t.length) {
    return false;
  }

  return sortString(s) === sortString(t);
};

const sortString = (s) => s.split("").sort().join("");

module.exports = { isPermutation };
