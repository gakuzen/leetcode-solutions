/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let pos = {
    x: 1,
    y: 1,
  };

  let memo = new Array(m);
  for (let [i] of memo.entries()) {
    memo[i] = new Array(n).fill(-1);
  }

  return backtrack(m, n, pos, memo);
};

const backtrack = (m, n, pos, memo) => {
  if (pos.x > m) return 0;
  if (pos.y > n) return 0;
  if (pos.x === m && pos.y === n) {
    return 1;
  }

  if (memo[pos.x - 1][pos.y - 1] === -1) {
    let right = backtrack(m, n, { x: pos.x + 1, y: pos.y }, memo);
    let down = backtrack(m, n, { x: pos.x, y: pos.y + 1 }, memo);

    memo[pos.x - 1][pos.y - 1] = right + down;
  }

  return memo[pos.x - 1][pos.y - 1];
};
