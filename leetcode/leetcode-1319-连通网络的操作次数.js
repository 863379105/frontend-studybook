/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
class UnionSet{
  constructor(vertices) {
    this.father = {}
    vertices.map(v => {
      this.father[v] = v
    })
  }
  find(v) {
    if(this.father[v] === v) return this.father[v]
    this.father[v] = this.find(this.father[v])
    return this.father[v]
  }
  merge(a,b) {
    this.father[this.find(b)] = this.find(a)
  }
}
var makeConnected = function(n, connections) {
  if(connections.length < n-1) return -1
  let vertices = []
  while(n--) {
    vertices.push(n)
  }
  
  const u = new UnionSet(vertices)
  connections.map(edge => {
    u.merge(edge[0],edge[1])
  })
  let cnt = 0
  for(let i in u.father) {
    console.log(u.father[i],i);
    if(u.father[i] == i) cnt ++
  }
  return cnt - 1 
};
// @lc code=end

