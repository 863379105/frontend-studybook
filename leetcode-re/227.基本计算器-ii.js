/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = (s.replace(/\s+/g, ''));
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    console.log(i + '  ',s[i]);
    if (s[i] === '*' || s[i] === '/') {
      let a = stack.pop();
      let b = s[i+1];
      stack.push(cal(a, b, s[i]))
      i = i + 1;
    } else {
      if (stack.length && (stack[stack.length - 1] !== '+' || stack[stack.length - 1] !== '-') && (s[i] !== '+' || s[i] !== '-' )) {
        stack.push(parseInt(stack.pop()) * 10 + parseInt(s[i]))
      } else {
        stack.push(s[i]);
      }
    }
    console.log(stack);
  }
  
  while (stack.length !== 1) {
    let a = stack.pop();
    let c = stack.pop();
    let b = stack.pop();
    stack.push(cal(a, b, c))
  }
  return stack.pop();
};
var cal = function(a, b, c) {
  a = parseInt(a);
  b = parseInt(b);
  if (c === '+') {
    return a + b;
  }
  if (c === '-') {
    return a - b;
  }
  if (c === '*') {
    return a * b;
  }
  if (c === '/') {
    return parseInt(a / b);
  }
}
// @lc code=end

