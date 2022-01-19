/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class UnionSet {
  constructor(vertices) {
      this.father = {}
      for(let i = 0; i < vertices.length; i++) {
          this.father[vertices[i]] = vertices[i]
      }
  }
  find(x) {
      if(this.father[x] === x) return this.father[x]
      this.father[x] = this.find(this.father[x])
      return this.father[x]
  }
  merge(a,b) {
      this.father[this.find(b)] = this.find(a)
  }
}
var findRedundantConnection = function(edges) {
  const vertices = []
  edges.map((edge,i) => {
    vertices.push(i+1)
  })
  const unionSet = new UnionSet(vertices)

  let repeatEdge 
  edges.map(edge => {
    if(unionSet.find(edge[0]) === unionSet.find(edge[1])) repeatEdge = edge
    unionSet.merge(edge[0],edge[1])
  })
  return repeatEdge
};
// @lc code=end

