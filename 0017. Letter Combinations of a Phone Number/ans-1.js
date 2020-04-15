/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  if (digits.length === 0) return [];

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let ans = [];

  combine(digits, map, ans);
  return ans;
};

const combine = (digits, map, ans, index = 0, str = "") => {
  if (index === digits.length) {
    ans.push(str);
    return ans;
  }

  for (let char of map[digits[index]]) {
    combine(digits, map, ans, index + 1, str.concat(char));
  }
};
