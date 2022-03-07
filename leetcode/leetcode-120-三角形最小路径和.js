/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let n = triangle.length
  let dp = []
  dp[n-1] = []
  for (let i = 0; i < triangle[n-1].length; i++) {
    dp[n-1].push(triangle[n-1][i])
  }
  for(let i = (n - 2); i >=0; i--){
    dp[i] = []
    for(let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + triangle[i][j]
    }
  }
  return dp[0][0]
};
// @lc code=end

