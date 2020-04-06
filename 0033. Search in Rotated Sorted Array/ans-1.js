/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let ans = -1;

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    if (target === nums[leftIndex]) return leftIndex;
    if (target === nums[rightIndex]) return rightIndex;

    if (target < nums[leftIndex] && target > nums[rightIndex]) return -1;

    if (target > nums[leftIndex]) leftIndex++;
    if (target < nums[rightIndex]) rightIndex--;
  }

  return ans;
};
