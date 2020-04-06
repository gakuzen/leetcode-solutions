/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let ans = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) return mid;
    if (target === nums[left]) return left;
    if (target === nums[right]) return right;

    if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target <= nums[mid - 1]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target >= nums[mid + 1] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return ans;
};
