/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method
 * to rotate the image by 90 degrees. Can you do this in place?
 */

const rotateMatrix = (matrix) => {
  for (let i = 0, j = matrix.length - 1; i < j; i++, j--) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
};

module.exports = { rotateMatrix };
