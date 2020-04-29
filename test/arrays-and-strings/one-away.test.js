const { oneAway } = require("../../src/arrays-and-strings/one-away");

describe("One Away", () => {
  test("It should pass basic tests", () => {
    expect(oneAway("pale", "ple")).toBe(true);
    expect(oneAway("pales", "pale")).toBe(true);
    expect(oneAway("pale", "bale")).toBe(true);
    expect(oneAway("pale", "bake")).toBe(false);
  });
});
