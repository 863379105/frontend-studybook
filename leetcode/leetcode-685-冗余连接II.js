/**
 * @param {number[][]} edges
 * @return {number[]}
 */

 class UnionSet{
  constructor(vertices) {
      this.father = {}
      vertices.map(v => {
          this.father[v] = v
      })
  }
  find(v) {
      if(this.father[v] == v) return this.father[v]
      this.father[v] = this.find(this.father[v])
      return this.father[v]
  }
  merge(v1,v2){
      this.father[this.find(v2)] = this.find(v1)
  } 
}
var findRedundantDirectedConnection = function(edges) {
  let l = edges.length
  let vertices = []
  let directions = {}
  let dIn = -1 // 记录两个父节点的子节点对应的边
  let cIn = -1 // 记录成环的最后一条边
  for(let i = 1; i <= l; i++) {
      vertices.push(i)
      directions[i] = i
  }
  const u = new UnionSet(vertices)
  
  edges.map((edge,i) => {
      const v1 = edge[0]
      const v2 = edge[1]
      if(directions[v2] != v2) {
          dIn = i
      }else {
          directions[v2] = v1
          if(u.find(v1) == u.find(v2)) {
              cIn = i //
          }else{
              u.merge(v1,v2)
          }
      }
      
  })
  if(cIn !== -1 && dIn !== -1) {
      return [directions[edges[dIn][1]],edges[dIn][1]]
  }
  if(cIn !== -1) return edges[cIn]
  if(dIn !== -1) return edges[dIn]
};