/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  let result = []
  preOrderTraverse(root,result)
  return result[result.length - k]
};
const preOrderTraverse = function(node,result) {
  if(node) {
      preOrderTraverse(node.left,result)
      result.push(node.val)
      preOrderTraverse(node.right,result)
  }
}