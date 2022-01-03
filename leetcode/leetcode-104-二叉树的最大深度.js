/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  let result = []
  if(root) {
      traverLevel([root],result)
  }
  return result.length
};
var traverLevel = function(level,result) {
  let nextLevel = []
  let levelVals = []
  if(level.length) {
      level.forEach(item => {
          levelVals.push(item.val)
          if(item.left) {
              nextLevel.push(item.left)
          }
          if(item.right) {
              nextLevel.push(item.right)
          }
      })
      result.push(levelVals)
      traverLevel(nextLevel,result)
  }
}
// @lc code=end

