/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  backtrack(nums, ans, new Set());

  return ans;
};

const backtrack = (nums, ans, set) => {
  if (set.size === nums.length) return ans.push([...set]);

  for (let num of nums) {
    if (set.has(num)) continue;
    set.add(num);
    backtrack(nums, ans, set);
    set.delete(num);
  }
};
