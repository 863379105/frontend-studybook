/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
  this.k = k
  this.nums = nums.sort((a,b) => b-a)
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  this.nums.push(val)
  this.nums.sort((a,b) => b-a)
  return this.nums[this.k-1]
};

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
// @lc code=end

