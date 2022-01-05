/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if(root) {
    let result = []
    levelTraverse([root],(levelVal) => {
      result.push(levelVal)
    })
    let rightView = []
    result.forEach(levelVal => {
      rightView.push(levelVal[levelVal.length-1])
    })
    return rightView
  }
  return []
};
var levelTraverse = function(level,cb) {
  if(level.length) {
    let nextLevel = []
    let levelVal = []
    level.forEach(node => {
      levelVal.push(node.val)
      if(node.left) nextLevel.push(node.left)
      if(node.right) nextLevel.push(node.right)
    });
    cb && cb(levelVal)
    levelTraverse(nextLevel,cb)
  }
}
// @lc code=end

