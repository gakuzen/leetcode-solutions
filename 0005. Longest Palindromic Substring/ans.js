/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    // element is center
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > ans.length) ans = s.substring(left + 1, right);

    // element is center-left
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      left = i - 1;
      right = i + 2;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > ans.length) ans = s.substring(left + 1, right);
    }
  }

  return ans;
};
