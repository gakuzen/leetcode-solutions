/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
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
    9: ["w", "x", "y", "z"]
  };

  let ans = [];

  for (let digit of digits) {
    let tmp = [];
    for (let char of map[digit]) {
      if (ans.length === 0) {
        tmp.push(char);
      } else {
        tmp = tmp.concat(ans.map(a => a + char));
      }
    }
    ans = tmp;
  }

  return ans;
};
