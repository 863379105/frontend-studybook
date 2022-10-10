/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  
  let result = [];
  if (root) {
    traversal(result, root);
  }
  return result;
};
var traversal = function(result, node) {
  if (node.left) {
    traversal(result, node.left);
  }
  if (node.right) {
    traversal(result, node.right);
  }
  result.push(node.val);
}
// @lc code=end

