/**
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
 */

const zeroMatrix = (matrix) => {
  const rowsWithZeros = new Set();
  const colsWithZeros = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowsWithZeros.add(i);
        colsWithZeros.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (rowsWithZeros.has(i)) {
      // if the row has a 0, then the entire row becomes 0
      // the columns also become 0
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (colsWithZeros.has(i)) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  return matrix;
};

module.exports = { zeroMatrix };
