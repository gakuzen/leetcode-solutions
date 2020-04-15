/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  backtrack(nums, ans);

  return ans;
};

const backtrack = (nums, ans, set = new Set()) => {
  if (set.size === nums.length) return ans.push([...set]);

  for (let num of nums) {
    if (set.has(num)) continue;
    set.add(num);
    backtrack(nums, ans, set);
    set.delete(num);
  }
};
