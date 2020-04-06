/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const ans = [-1, -1];

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    if (target !== nums[leftIndex]) leftIndex++;
    else ans[0] = leftIndex;

    if (target !== nums[rightIndex]) rightIndex--;
    else ans[1] = rightIndex;

    if (ans[0] !== -1 && ans[1] !== -1) {
      return ans;
    }
  }

  return ans;
};
