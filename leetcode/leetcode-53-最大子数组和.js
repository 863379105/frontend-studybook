/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let dp = [];
  dp[0] = nums[0]
  let maxResult = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i-1]+nums[i]);
    if(dp[i] > maxResult) maxResult = dp[i]
  }
  return maxResult
};