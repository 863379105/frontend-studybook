/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
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
var numIslands = function(grid) {
  let r = grid.length
  let c = grid[0].length
  let vertices = []
  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      if(grid[i][j] === "1"){
        vertices.push(i * c + j + 1)
      } 
    }
  }
  const unionSet = new UnionSet(vertices)
  for(let i = 0; i < r; i++) {
      for(let j = 0; j < c; j++) {
          if(grid[i][j] === "1") {
            if(i-1>=0 && grid[i-1][j] === "1") {
                unionSet.merge((i*c+j+1),((i-1)*c+j+1))
            }
            if(j-1>=0 && grid[i][j-1] === "1") {
                unionSet.merge((i*c+j+1),(i*c+j))
            }
          }
      }
  }   
  let nums = 0
  for(let key in unionSet.father) {
    if(unionSet.father[key] == key) nums++
  }
  return  nums
}
