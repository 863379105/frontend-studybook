/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = []
  while(pushed.length) {
    stack.push(pushed[0])
    pushed.shift()
    while(popped.length) {
      if(stack[stack.length-1] === popped[0]) {
        stack.pop()
        popped.shift()
      } else {
        break
      }
    }
  }
  
  return stack.length ? false : true
};
// @lc code=end

