/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  let stack = [
    {
      current: [],
      remaining: [...nums],
    },
  ];

  while (stack.length > 0) {
    const { current, remaining } = stack.pop();

    if (current.length === nums.length) ans.push(current);
    else {
      for (let i = 0; i < remaining.length; i++) {
        stack.push({
          current: [...current, remaining[i]],
          remaining: remaining.slice(0, i).concat(remaining.slice(i + 1)),
        });
      }
    }
  }

  return ans;
};
