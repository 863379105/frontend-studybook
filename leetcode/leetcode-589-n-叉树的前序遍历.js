/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = []
    preOrderTraverseNode(root,result)
    return result
};
var preOrderTraverseNode = function(node,result) {
  if(node) {
    result.push(node.val)
    node.children.forEach(child => {
      preOrderTraverseNode(child,result)
    });
  }
}
// @lc code=end

