/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ans = 0;

  let stack = [
    {
      x: 1,
      y: 1,
    },
  ];

  while (stack.length !== 0) {
    let top = stack.pop();

    if (top.x > m) continue;
    if (top.y > n) continue;
    if (top.x === m && top.y === n) {
      ans++;
      continue;
    }

    stack.push({ x: top.x + 1, y: top.y });
    stack.push({ x: top.x, y: top.y + 1 });
  }

  return ans;
};
