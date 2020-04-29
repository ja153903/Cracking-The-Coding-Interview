const { zeroMatrix } = require("../../src/arrays-and-strings/zero-matrix");

describe("Zero Matrix", () => {
  test("It should pass a basic test", () => {
    const input = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 1],
    ];

    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
    ];

    expect(zeroMatrix(input)).toEqual(expected);
  });
});
