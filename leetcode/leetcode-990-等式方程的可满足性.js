/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
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
var equationsPossible = function(equations) {
  const vertices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const unionSet = new UnionSet(vertices) 
  equations.map(equation => {
    if(equation[1] === "=" && unionSet.find(equation[0]) !== unionSet.find(equation[3])) {
      unionSet.merge(equation[0],equation[3])
    }
  })
  for(let i = 0; i < equations.length; i++) {
    if(equations[i][1] === "!") {
      if(unionSet.find(equations[i][0]) === unionSet.find(equations[i][3])) return false
    }
  }
  return true
};
// @lc code=end

