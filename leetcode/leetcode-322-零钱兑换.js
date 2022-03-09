/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp[i] = -1;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j ++) {
      if(coins[j] > i) continue;
      if(dp[i - coins[j]] === -1) continue;
      if(dp[i] === -1 || dp[i] > (dp[i - coins[j]] + 1)) 
        dp[i] = dp[i - coins[j]] + 1;
    }
  }
  return dp[amount]
};
// @lc code=end

