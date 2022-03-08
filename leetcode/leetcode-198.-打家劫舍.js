/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let dp = [];
  let maxCost = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = nums[i];
    maxCost = maxCost < dp[i] ? dp[i] : maxCost;
  }
  for (let i = 2; i < nums.length; i++) {
    for(let j = 0; j < i-1; j++) {
      dp[i] = Math.max(dp[j] + nums[i],dp[i])
    }
    maxCost = maxCost < dp[i] ? dp[i] : maxCost;
  }
  return maxCost
};

