const { isUnique } = require("../../src/arrays-and-strings/is-unique");

describe("Is Unique", () => {
  test("We expect an empty string to be true", () => {
    expect(isUnique("")).toBe(true);
  });

  test("We expect a string with no duplicate characters to be true", () => {
    expect(isUnique("abcdef")).toBe(true);
  });

  test("We expect a string with duplicates to be false", () => {
    expect(isUnique("aaaaaa")).toBe(false);
  });
});
