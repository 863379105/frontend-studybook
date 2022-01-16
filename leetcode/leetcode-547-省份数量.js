/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}
var findCircleNum = function(isConnected) {
  let vertices = []
  isConnected.map((v,i) => {
      vertices.push(i+1)
  })
  let adjList = transferAdjList(isConnected)
  let colors = initializeColor(vertices)
  let p = {}
  vertices.map(v => {
      p[v] = null
  })
  vertices.map(v => {
      if(colors[v] === Colors.WHITE) {
          DFS(v,adjList,colors,p)
      }
  })
  let nums = 0
  Object.values(p).map(v => {
      if(v === null) nums++
  })
  return nums
};
var transferAdjList = function(matrix) {
  let adjList = {}
  for(let i = 0; i < matrix.length; i++) {
      adjList[i+1] = []
      for(let j = 0; j < matrix[i].length; j++) {
          if(i !== j && matrix[i][j]) {
              adjList[i+1].push(j+1)
          }
      }
  }
  return adjList
}
var initializeColor = function(vertices) {
  let colors = {}
  vertices.map(v => {
      colors[v] = Colors.WHITE
  })
  return colors
}
var DFS = function(vertex,adjList,colors,p) {
  colors[vertex] = Colors.GREY
  let nerghbors = adjList[vertex]
  for(let i = 0; i < nerghbors.length; i++) {
      if(colors[nerghbors[i]] === Colors.WHITE) {
          p[nerghbors[i]] = vertex
          DFS(nerghbors[i],adjList,colors,p)
      }
  }
  colors[vertex] = Colors.BLACK
}
// @lc code=end

