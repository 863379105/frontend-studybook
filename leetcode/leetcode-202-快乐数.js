/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let p = n
  let q = n
  while(q !== 1 && (getNext(p) !== 1 || getNext(getNext(q)) !== 1)) {
    p = getNext(p)
    q = getNext(getNext(q))
    if(q === p) {
      return false
    }
  }
  return true
};
const getNext = (n) => {
  let sum = 0
  n.toString().split('').map(num => {
    sum += num * num
  })
  return sum
} 