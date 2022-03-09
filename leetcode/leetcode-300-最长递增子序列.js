/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = [];
  let max = 1;
  nums.forEach((v,i) => dp[i] = 1)
  for(let i = 1; i < nums.length; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    max = Math.max(max,dp[i])
  }
  return max
};
// @lc code=end

