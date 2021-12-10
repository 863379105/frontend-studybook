/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  if(!head || !head.next) {
    return head
  }
  let length = 1
  let curr = head
  while(curr.next) {
    length++
    curr = curr.next
  }
  curr.next = head
  for (let i = 0; i < length - (k % length); i++) {
    curr = curr.next
  }
  head = curr.next
  curr.next = null
  return head
};