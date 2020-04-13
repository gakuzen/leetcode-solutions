/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ans = [];

  let stack = [
    {
      index: 0,
      combination: [],
      remainder: target,
    },
  ];

  while (stack.length > 0) {
    let { index, combination, remainder } = stack.pop();

    while (index < candidates.length && remainder > 0) {
      if (candidates[index] === remainder)
        ans.push([...combination, candidates[index]]);
      stack.push({
        index,
        combination: [...combination, candidates[index]],
        remainder: remainder - candidates[index],
      });
      index++;
    }
  }

  return ans;
};
