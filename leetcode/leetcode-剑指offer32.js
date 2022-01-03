/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let result = []
  if(root) {
      traverLevel([root],result)
  }
  
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