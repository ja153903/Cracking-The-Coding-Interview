const {
  stringCompression,
} = require("../../src/arrays-and-strings/string-compression");

describe("String Compression", () => {
  test("It should pass a basic test", () => {
    expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
  });
});
