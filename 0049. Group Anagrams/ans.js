/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const charsCount = new Array(26).fill(0);

    for (const char of [...str]) {
      const val = char.charCodeAt() - "a".charCodeAt();
      charsCount[val]++;
    }

    const key = charsCount.join(",");

    if (!map.has(key)) {
      map.set(key, [str]);
    } else {
      map.get(key).push(str);
    }
  }

  return Array.from(map.values());
};
