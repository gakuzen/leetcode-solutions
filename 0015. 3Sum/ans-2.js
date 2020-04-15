/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const curI = nums[i];

    if (curI > 0) {
      break;
    }

    if (i > 0 && curI === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const curJ = nums[j];
      const curK = nums[k];

      const sum = curI + curJ + curK;
      if (sum === 0) {
        ans.push([curI, curJ, curK]);

        while (nums[j + 1] === curJ) j++;
        while (nums[k - 1] === curK) k--;

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }

  return ans;
};
