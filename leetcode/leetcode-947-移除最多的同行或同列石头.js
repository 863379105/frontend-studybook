/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
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

var removeStones = function(stones) {
  let vertices = []
  for(let i = 0; i < stones.length; i++) {
    vertices.push(i)
  }
  const u = new UnionSet(vertices)
  let hash_x = {}
  let hash_y = {}
  for(let i = 0; i < stones.length; i++) {
    if(hash_x[stones[i][0]] !== undefined){
      u.merge(i,hash_x[stones[i][0]])
    }else{
      hash_x[stones[i][0]] = i
    }
    if(hash_y[stones[i][1]] !== undefined){
      u.merge(i,hash_y[stones[i][1]])
    }else{
      hash_y[stones[i][1]] = i
    }
  }
  let unions = 0
  for(let key in u.father){
    if(u.father[key] == key) unions++
  }
  return stones.length - unions
};
// @lc code=end

