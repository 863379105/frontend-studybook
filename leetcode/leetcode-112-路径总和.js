/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let sumResults = []
  computeNode(root,0,sumResults)
  return sumResults.includes(targetSum)
};
function computeNode(node,val,sumResults) {
  if(node) {
    if(!node.left && !node.right) {
      sumResults.push(val+node.val)
    }
    computeNode(node.left,node.val+val,sumResults)
    computeNode(node.right,node.val+val,sumResults)
  }
}
// @lc code=end

