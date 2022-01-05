/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let result = []
  preOrderTravel(root,(val) => {
    result.push(val)
  })
  result.sort((a,b) => a-b)
  return result[k-1]
};
var preOrderTravel = function(node,cb) {
  if(node) {
    cb && cb(node.val)
    preOrderTravel(node.left,cb)
    preOrderTravel(node.right,cb)
  }
}
// @lc code=end

