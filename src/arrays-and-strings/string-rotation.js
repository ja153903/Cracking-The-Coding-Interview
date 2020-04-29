/**
 * String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.
 * Given two strings s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
 */

const stringRotation = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  return isSubstring(s, t);
};

const isSubstring = (s, t) => {
  for (let i = 1; i < s.length; i++) {
    if (rotate(t, i) === s) {
      return true;
    }
  }

  return false;
};

const rotate = (s, i) => {
  const arr = s.split("");
  const copy = [...arr];
  const n = arr.length;

  for (let j = 0; j < n; j++) {
    copy[(i + j) % n] = arr[j];
  }

  return copy.join("");
};

module.exports = { stringRotation };
