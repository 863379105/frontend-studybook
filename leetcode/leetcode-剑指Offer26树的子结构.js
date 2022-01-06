/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
  if(!B || !A) return false
  let result = []
  preOrderTraverse(A,(node) => {
      if(node.val === B.val){
          result.push(node)
      }
  })
  if(!result.length) return false
  for(let i = 0; i < result.length; i++) {
      if(isSameTree(result[i],B)) return true
  }
  return false
};

var isSameTree = function(p,q) {
  if(!p && !q) return true
  if(p && !q) return true
  if(!p && q || q.val !== p.val) return false
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
}

var preOrderTraverse = function(root,cb) {
  if(root) {
      cb && cb(root)
      preOrderTraverse(root.left,cb)
      preOrderTraverse(root.right,cb)
  }
}