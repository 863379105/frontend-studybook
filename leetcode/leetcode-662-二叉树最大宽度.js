/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function(root) {
  var levelTraverse = function(level) {
    if(level.length) {
      let len = level.length
      let nextLevel = []
      console.log(level[len-1].pos,level[0].pos );
      maxWidth = Math.max((level[len-1].pos - level[0].pos + 1),maxWidth)
      for(let i = 0;i < len; i++) {
        if(level[i].left) {
          level[i].left.pos = (level[i].pos-level[0].pos) * 2 + 1
          nextLevel.push(level[i].left)
        }
        if(level[i].right) {
          level[i].right.pos = (level[i].pos-level[0].pos) * 2 + 2
          nextLevel.push(level[i].right)
        }
      }
      console.log(maxWidth);
      levelTraverse(nextLevel)
    }
  }

  if(!root) return 0
  root.pos = 0
  let maxWidth = 0
  levelTraverse([root])
  return maxWidth
};

// @lc code=end

