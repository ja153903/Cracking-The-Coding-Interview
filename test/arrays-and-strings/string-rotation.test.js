const {
  stringRotation,
} = require("../../src/arrays-and-strings/string-rotation");

describe("String Rotation", () => {
  test("It should pass a basic test", () => {
    expect(stringRotation("waterbottle", "erbottlewat")).toBe(true);
  });
});
