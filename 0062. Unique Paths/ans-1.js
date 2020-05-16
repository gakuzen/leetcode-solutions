/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ans = {
    sum: 0,
  };

  let pos = {
    x: 1,
    y: 1,
  };

  backtrack(m, n, pos, ans);

  return ans.sum;
};

const backtrack = (m, n, pos, ans) => {
  if (pos.x > m) return;
  if (pos.y > n) return;
  if (pos.x === m && pos.y === n) {
    ans.sum++;
    return;
  }

  backtrack(m, n, { x: pos.x + 1, y: pos.y }, ans);
  backtrack(m, n, { x: pos.x, y: pos.y + 1 }, ans);
};
