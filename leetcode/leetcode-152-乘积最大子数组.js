/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let dp = []; // 保存最大值
  let mut = []; // 保存最小值
  let maxNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i];
    mut[i] = nums[i];
    maxNum = maxNum < nums[i] ? nums[i] : maxNum;
  }
  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max((dp[i-1] * nums[i]), nums[i], (mut[i-1] * nums[i]))
    mut[i] = Math.min((mut[i-1] * nums[i]), nums[i], (dp[i-1] * nums[i]))
    maxNum = maxNum < dp[i] ? dp[i] : maxNum;
  }
  return maxNum;
};
// @lc code=end

