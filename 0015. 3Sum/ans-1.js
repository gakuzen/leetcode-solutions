/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];

  const ansSet = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    const curI = nums[i];

    if (i > 0 && curI === nums[i - 1]) {
      continue;
    }

    const set = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      const curJ = nums[j];

      const val = 0 - curI - curJ;

      if (j > i + 1 && set.has(curJ)) {
        const sorted = [curI, curJ, val].sort((a, b) => a - b);
        ansSet.add(sorted.join(","));
      }

      set.add(val);
    }
  }

  for (let set of ansSet) {
    ans.push(set.split(","));
  }

  return ans;
};
