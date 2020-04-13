/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ans = [];

  let buffer = [];
  search(candidates, 0, target, buffer, ans);
  return ans;
};

const search = (candidates, index, target, buffer, ans) => {
  if (target === 0) return ans.push(Array.from(buffer));
  if (target < 0) return;
  if (index >= candidates.length) return;

  buffer.push(candidates[index]);
  search(candidates, index, target - candidates[index], buffer, ans);
  buffer.pop();
  search(candidates, index + 1, target, buffer, ans);
};
