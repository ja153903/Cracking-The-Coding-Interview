/**
 * One Away: There are three types of edits that can be performed on strings:
 * 1. insert a character
 * 2. remove a character
 * 3. edit a character
 *
 * Given two strings, write a function to check if they are one edit (or zero edits) away from each other
 */

const oneAway = (s, t) => {
  if (s === t) {
    return true;
  }

  const n = s.length;
  const m = t.length;

  if (Math.abs(m - n) > 1) {
    return false;
  }

  return canInsertOrRemove(s, t) || canEdit(s, t);
};

const canInsertOrRemove = (s, t) => {
  let missing = 0;
  const counter = createCounter(s);

  for (const char of t) {
    if (!counter.has(char) || (counter.has(char) && counter.get(char) === 0)) {
      missing++;
    } else {
      counter.set(char, counter.get(char) - 1);
    }
  }

  return missing <= 1;
};

const canEdit = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const counter = createCounter(s);
  for (const char of t) {
    if (counter.has(char)) {
      counter.set(char, counter.get(char) - 1);
    }
  }

  return (
    [...counter.values()].filter((accum, current) => accum + current, 0) <= 1
  );
};

const createCounter = (s) => {
  const mp = new Map();

  for (const char of s) {
    mp.set(char, mp.has(char) ? mp.get(char) + 1 : 1);
  }

  return mp;
};

module.exports = { oneAway };
