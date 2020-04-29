const {
  isPermutation,
} = require("../../src/arrays-and-strings/check-permutation");

describe("Check Permutation", () => {
  test("It should be true if strings are empty", () => {
    expect(isPermutation("", "")).toBe(true);
  });

  test("It should be true if the strings are equal", () => {
    expect(isPermutation("abc", "abc")).toBe(true);
  });

  test("It should be true if strings are actually permutations", () => {
    expect(isPermutation("acb", "bac")).toBe(true);
  });

  test("It should be false if the strings are of different lengths", () => {
    expect(isPermutation("a", "")).toBe(false);
  });
});
