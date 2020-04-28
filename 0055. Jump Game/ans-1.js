/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let flag = {
    can: false,
  };

  jump(nums, 0, flag);

  return flag.can;
};

const jump = (nums, index, flag) => {
  if (flag.can) {
    return true;
  }

  if (index === nums.length - 1) {
    flag.can = true;
    return true;
  }
  if (index > nums.length - 1) return false;
  if (nums[index] === 0) return false;

  for (let i = nums[index]; i > 0; i--) {
    let reached = jump(nums, index + i, flag);
    if (reached) {
      return true;
    }
  }
};
