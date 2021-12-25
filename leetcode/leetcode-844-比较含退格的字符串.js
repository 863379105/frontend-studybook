/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sS = OP(s)
  let tS = OP(t)
  return  sS.toString() == tS.toString()
};
var OP = function(s) {
  let stack = []
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "#") {
      stack.pop()
    }else {
      stack.push(s[i])
    }
  }
  return stack
}
// @lc code=end

