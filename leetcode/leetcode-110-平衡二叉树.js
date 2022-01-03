/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let heights = []
  preOrderTraverse(root,(node) => {
    heights.push(nodeHeight(node.left)-nodeHeight(node.right))
  })
  for(let i = 0; i < heights.length; i++) {
    if(Math.abs(heights[i]) > 1) return false
  }
  return true
};
var preOrderTraverse = function(node,callback) {
  if(node) {
    callback && callback(node)
    preOrderTraverse(node.left,callback)
    preOrderTraverse(node.right,callback)
  }
}
var nodeHeight = function(node) {
  if(node) {
    return Math.max(nodeHeight(node.left),nodeHeight(node.right)) + 1 
  }
  return -1
}
// @lc code=end

