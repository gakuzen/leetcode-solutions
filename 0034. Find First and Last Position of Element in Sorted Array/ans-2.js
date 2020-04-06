/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const ans = [-1, -1];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right) {
      if (nums[left] === target) {
        ans[0] = left;
      }
      break;
    }

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (ans[0] !== -1) {
    left = 0;
    right = nums.length - 1;

    while (left <= right) {
      if (left === right) {
        if (nums[right] === target) ans[1] = right;
        else if (nums[right - 1] === target) ans[1] = right - 1;
        break;
      }

      let mid = Math.floor((left + right) / 2);

      if (nums[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return ans;
};
