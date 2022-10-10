/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let root = new TreeNode(preorder[0], null, null);
  let index = inorder.indexOf(preorder[0]);
  let leftI = index !== 0 && inorder.slice(0, index);
  let rightI = index !== inorder.length - 1 && inorder.slice(index + 1);
  if (leftI) {
    let leftP = preorder.slice(1,leftI.length + 1)
    root.left = buildTree(leftP, leftI);
  }
  if (rightI) {
    let rightP = leftI ? preorder.slice(leftI.length + 1) : preorder.slice(1);
    root.right = buildTree(rightP, rightI);
  }
  return root;
};
// @lc code=end

