/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 方法一：递归判断
var isSameTree = function(p, q) {
  if(!p && !q) return true
  if(!p || !q || p.val !== q.val) return false
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
}
// 方法二： 通过先序遍历和中序遍历可以确定一棵树判断
// var isSameTree = function(p, q) {
//   let pPreOrderTravel = []
//   let pInOrderTravel = []
//   let qPreOrderTravel = []
//   let qInOrderTravel = []
//   preOrderTravel(p,(val) => {
//     pPreOrderTravel.push(val)
//   })
//   inOrderTravel(p,(val) => {
//     pInOrderTravel.push(val)
//   })
//   preOrderTravel(q,(val) => {
//     qPreOrderTravel.push(val)
//   })
//   inOrderTravel(q,(val) => {
//     qInOrderTravel.push(val)
//   })
//   return (JSON.stringify(pInOrderTravel) === JSON.stringify(qInOrderTravel) && JSON.stringify(pPreOrderTravel) === JSON.stringify(qPreOrderTravel))
// };
// var preOrderTravel = function(node,cb) {
//   if(node) {
//     cb && cb(node)
//     preOrderTravel(node.left,cb)
//     preOrderTravel(node.right,cb)
//   }
// }
// var inOrderTravel = function(node,cb) {
//   if(node) {
//     preOrderTravel(node.left,cb)
//     cb && cb(node.val)
//     preOrderTravel(node.right,cb)
//   }
// }
// @lc code=end

