/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  if(stones.length === 1 || stones.length === 0) return stones[0] || 0
  stones.sort((a,b) => a -b)
  let len = stones.length
  if(stones[len-1] === stones[len-2]) {
      return lastStoneWeight(stones.slice(0,len - 2))
  } else {
      stones[len - 2] = stones[len-1] - stones[len-2]
      return lastStoneWeight(stones.slice(0,len - 1))
  }
};
// @lc code=end

