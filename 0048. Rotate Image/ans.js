/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const length = matrix.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2 - 0.5; j++) {
      [matrix[i][length - j - 1], matrix[i][j]] = [
        matrix[i][j],
        matrix[i][length - j - 1],
      ];
    }
  }

  return matrix;
};
