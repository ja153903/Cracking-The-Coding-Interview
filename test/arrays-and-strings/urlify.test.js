const { urlify } = require("../../src/arrays-and-strings/urlify");

describe("URLify", () => {
  test("It should pass a basic test", () => {
    const input = "Mr John Smith    ";
    const length = 13;

    expect(urlify(input, length)).toBe("Mr%20John%20Smith");
  });
});
