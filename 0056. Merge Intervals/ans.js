/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const ans = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let tmp = [];

  for (const interval of intervals) {
    if (tmp.length === 0) {
      tmp.push(interval[0]);
      tmp.push(interval[1]);
    } else {
      if (interval[0] <= tmp[1]) {
        tmp[1] = Math.max(tmp[1], interval[1]);
      } else {
        ans.push(tmp);
        tmp = [];
        tmp.push(interval[0]);
        tmp.push(interval[1]);
      }
    }
  }
  if (tmp.length > 0) {
    ans.push(tmp);
  }

  return ans;
};
