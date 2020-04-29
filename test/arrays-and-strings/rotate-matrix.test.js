const { rotateMatrix } = require("../../src/arrays-and-strings/rotate-matrix");

describe("Rotate Matrix", () => {
  test("It should pass a basic test", () => {
    const input = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    const expected = [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 1],
    ];

    expect(rotateMatrix(input)).toEqual(expected);
  });
});
