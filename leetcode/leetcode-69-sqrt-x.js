/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0, right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (x > (mid*mid)) {
      left = mid + 1;
    } else if ( x < (mid*mid)) {
      right = mid - 1;
    } else {
      return mid
    }
  }
  return right;
};
// @lc code=end

