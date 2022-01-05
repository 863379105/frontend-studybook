/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 var isSymmetric = function(root) {
  if(!root || (!root.left && !root.right)) return true
  if(!root.left || !root.right) return false
  reverseTree(root.right)
  return isSameTree(root.left,root.right)
};
var reverseTree = function(root) {
  if(root) {
      let temp = root.left
      root.left = root.right
      root.right = temp
      reverseTree(root.left)
      reverseTree(root.right)
  }
}
var isSameTree = function(p,q) {
  if(!q && !p) return true
  if(!q || !p || p.val !== q.val) return false
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
}
// @lc code=end

