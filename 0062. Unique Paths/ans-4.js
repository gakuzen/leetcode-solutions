/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let grid = new Array(m);
  for (let [i] of grid.entries()) {
    grid[i] = new Array(n).fill(1);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) continue;

      let right = grid[i][j + 1] || 0;
      let down = grid[i + 1] === undefined ? 0 : grid[i + 1][j];

      grid[i][j] = down + right;
    }
  }

  return grid[0][0];
};
