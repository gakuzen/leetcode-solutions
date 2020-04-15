/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;

  let ans = 0;
  let i = 0;
  let j = 0;

  const charSet = new Set();

  while (i < n && j < n) {
    if (!charSet.has(s[j])) {
      ans = Math.max(ans, j - i + 1);
      charSet.add(s[j]);
      j++;
    } else {
      charSet.delete(s[i]);
      i++;
    }
  }

  return ans;
};
