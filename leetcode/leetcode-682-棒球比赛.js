/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = []
  for(let i = 0;i < ops.length; i++) {
    if(ops[i] === 'C') {
      stack.pop()
    }else if(ops[i] === 'D') {
      stack.push(stack[stack.length - 1] * 2)
    }else if(ops[i] === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    }else {
      stack.push(parseInt(ops[i]))
    }
  }
  let result = 0
  for(let i = 0;i < stack.length; i++) {
    result = result + stack[i]
  }
  return result
};
// @lc code=end

