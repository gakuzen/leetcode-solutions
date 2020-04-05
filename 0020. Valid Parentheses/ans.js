/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") return true;

  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  const stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (char === pairs[stack[stack.length - 1]]) stack.pop();
      else return false;
    }
  }

  return stack.length === 0;
};
