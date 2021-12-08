/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let p = head
  let q = head
  while(q && q.next ) {
    q = q.next.next
    p = p.next
    if(p === q) {
      return true
    }
  }
  return false
};