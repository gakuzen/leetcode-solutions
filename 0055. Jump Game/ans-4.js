/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true;

  let leftmostStepping;

  for (let i = nums.length - 2; i >= 0; i--) {
    let canReachLast;
    if (!leftmostStepping) {
      canReachLast = nums[i] >= nums.length - 1 - i;
    }

    let canReachStepping;
    if (leftmostStepping) {
      canReachStepping = i + nums[i] >= leftmostStepping;
    }

    if (canReachLast || canReachStepping) {
      leftmostStepping = i;
    }
  }

  return leftmostStepping === 0;
};
