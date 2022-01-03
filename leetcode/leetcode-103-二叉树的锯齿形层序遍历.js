/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  let result = []
  if(root) {
      traverLevel([root],result)
  }
  result.map((item,key) => {
      if(key%2) {
          result[key] = result[key].reverse()
      }
  })
  return result
};
var traverLevel = function(level,result) {
  let nextLevel = []
  let levelVals = []
  if(level.length) {
      level.forEach(item => {
          levelVals.push(item.val);
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

