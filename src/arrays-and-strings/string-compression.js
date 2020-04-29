/**
 * String Compression: Implement a method to perform basic string compression using the counts of
 * repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed"
 * string would not become smaller than the original string, your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a-z)
 */

const stringCompression = (s) => {
  let current = s[0];
  let currentNum = 1;

  const result = [];

  for (let i = 1; i <= s.length; i++) {
    if (i === s.length || current !== s[i]) {
      result.push(`${current}${currentNum}`);
      if (i < s.length) {
        current = s[i];
        currentNum = 1;
      }
    } else if (current === s[i]) {
      currentNum++;
    }
  }

  return result.join("");
};

module.exports = { stringCompression };
