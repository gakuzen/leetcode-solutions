/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let stack = [
    {
      at: 0,
    },
  ];

  while (stack.length !== 0) {
    let top = stack.pop();

    if (top.at === nums.length - 1) {
      return true;
    }
    if (top.at > nums.length - 1) {
      continue;
    }

    for (let i = nums[top.at]; i > 0; i--) {
      stack.push({ at: top.at + i });
    }
  }

  return false;
};
