/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = new Map([[')','('],[']','['],['}','{']])
  if(map.has(s[0])) return false
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      if(stack[stack.length-1] == map.get(s[i])){
        stack.pop()
      }else{
        return false
      }
    }else {
      stack.push(s[i])
    }
  }
  if(stack.length) return false
  return true
};
// @lc code=end

