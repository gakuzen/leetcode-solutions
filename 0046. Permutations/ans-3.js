/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  let stack = [
    {
      buffer: new Set(),
    },
  ];

  while (stack.length > 0) {
    const { buffer } = stack.pop();

    if (buffer.size === nums.length) ans.push([...buffer]);
    else {
      for (let i = 0; i < nums.length; i++) {
        if (!buffer.has(nums[i]))
          stack.push({ buffer: new Set(buffer).add(nums[i]) });
      }
    }
  }

  return ans;
};
