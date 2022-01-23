/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
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
var smallestStringWithSwaps = function(s, pairs) {
  let len = s.length
  let vertices = []
  while(len--) {
    vertices.push(len)
  }
  const u = new UnionSet(vertices)
  pairs.map(edge => {
    u.merge(edge[0],edge[1])
  })
  let heaps = {}
  for(let i = 0 ; i < s.length; i++) {
    let root = u.find(i)
    if(!heaps[root]){
      heaps[root] = []
    }
    heaps[root].push(s[i])
  }
  for(let key in heaps) {
    heaps[key].sort()
  }
  let str = ''
  for(let i = 0; i < s.length; i++) {
    str = str + heaps[u.find(i)].shift()
  }
  return str
};
// @lc code=end

