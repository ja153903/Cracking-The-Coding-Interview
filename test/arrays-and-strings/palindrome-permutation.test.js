const {
  palindromePermutation,
} = require("../../src/arrays-and-strings/palindrome-permutation");

describe("Palindrome Permutation", () => {
  test("It should pass the Tact Coa test", () => {
    const input = "Tact Coa";

    expect(palindromePermutation(input)).toBe(true);
  });

  test("It should pass another test", () => {
    const input = "rcarace";

    expect(palindromePermutation(input)).toBe(true);
  });

  test("It should fail a reasonable test", () => {
    const input = "absc";

    expect(palindromePermutation(input)).toBe(false);
  });
});
