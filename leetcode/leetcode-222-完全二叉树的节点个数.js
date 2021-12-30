/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function(root) {
  let count = [0]
  preOrderTraverseNode(root,count)
  return count[0]
};
var preOrderTraverseNode = function(node,count) {
  if(node) {
    count[0]++
    preOrderTraverseNode(node.left,count)
    preOrderTraverseNode(node.right,count)
  }
}
// @lc code=end

