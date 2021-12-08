/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let p = head, q = head, r = head
  while(q && q.next) {
    p = p.next
    q = q.next.next
    if(p === q) {
      while(p) {
        if(p === r) return r
        p = p.next
        r = r.next
      }
    }
  }
  return null
};