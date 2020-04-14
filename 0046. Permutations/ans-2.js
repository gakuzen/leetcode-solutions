/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  backtrack(nums, ans, [], nums);

  return ans;
};

const backtrack = (nums, ans, current, remaining) => {
  if (remaining.length === 0) return ans.push([...current]);

  for (let i = 0; i < remaining.length; i++) {
    current.push(remaining[i]);
    backtrack(
      nums,
      ans,
      current,
      remaining.slice(0, i).concat(remaining.slice(i + 1))
    );
    current.pop();
  }
};
