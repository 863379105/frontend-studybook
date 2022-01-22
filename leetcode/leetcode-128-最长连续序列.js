/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
class UnionSet {
  constructor(vertices) {
    this.father = {}
    vertices.map( v => {
      this.father[v] = v
    }) 
  }
  find(v) {
    if(this.father[v] == v) return this.father[v]
    this.father[v] = this.find(this.father[v])
    return this.father[v]
  }
  merge(a,b){
    this.father[this.find(b)] = this.find(a)
  }
}

var longestConsecutive = function(nums) {
  let set = new Set(nums)
  nums = Array.from(set)
  let hashMap = {}
  let vertices = [];
  let len = nums.length;
  while(len--) {
    hashMap[nums[len]] = len
    vertices.push(len)
  }
  const u = new UnionSet(vertices)
  for(let i = 0; i < nums.length; i++) {
    if(hashMap[nums[i]-1]){
      u.merge(i,hashMap[nums[i]-1])
    }
    if(hashMap[nums[i]+1]){
      u.merge(i,hashMap[nums[i]+1])
    }
  }
  let maxLen = 0
  for(let i in u.father){
    if(u.find(i) == i){
      let temLen = 0
      for(let j in u.father){
        if(u.find(u.father[j]) == i) temLen++
      }
      maxLen = maxLen < temLen ? temLen : maxLen
    }
  }
  return maxLen
};
// @lc code=end

