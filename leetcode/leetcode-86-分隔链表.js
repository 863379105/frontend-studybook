/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(!head || !head.next) {
    return head
  }
  let curr = head
  let left = new ListNode(-1)//
  let leftCurr = left//
  let right = null
  let rightCurr = right;
  while(curr) {
    if(curr.val < x) {
      let n = curr.next
      if(!left.next) {//
        left.next = curr;//
      }else {
        leftCurr.next = curr
      }
      leftCurr = curr
      leftCurr.next = null
      curr = n
    } else {
      let n = curr.next
      if(!right) {
        right = curr;
      }else {
        rightCurr.next = curr
      }
      rightCurr = curr
      rightCurr.next = null
      curr = n
    }
  }
  leftCurr.next = right;
  return left.next
};
// @lc code=end

