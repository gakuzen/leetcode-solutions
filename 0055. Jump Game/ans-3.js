/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true;

  let set = new Set();

  for (let i = nums.length - 2; i >= 0; i--) {
    let canReachLast = nums[i] >= nums.length - 1 - i;

    let canReachStepping = false;
    let furthestJump = Math.min(i + nums[i], nums.length - 1);
    for (let j = i + 1; j <= furthestJump; j++) {
      if (set.has(j)) {
        canReachStepping = true;
        break;
      }
    }

    if (canReachLast || canReachStepping) {
      set.add(i);
    }
  }

  return set.has(0);
};
