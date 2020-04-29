/**
 * URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the additional characters
 * , and that you are given the true length of the string.
 */

const urlify = (s, n) => {
  const result = Array(n);

  s.trim()
    .split("")
    .forEach((value, index) => {
      if (value === " ") {
        result[index] = "%20";
      } else {
        result[index] = value;
      }
    });

  return result.join("");
};

module.exports = { urlify };
