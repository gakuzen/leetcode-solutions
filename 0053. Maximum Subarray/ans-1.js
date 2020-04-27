/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    ans = Math.max(ans, sum);
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      ans = Math.max(ans, sum);
    }
  }

  return ans;
};
