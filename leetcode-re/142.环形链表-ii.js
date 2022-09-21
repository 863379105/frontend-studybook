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
    if (!head) return null;
    let q = head, p = head;
    while(q.next && q.next.next) {
      p = p.next;
      q = q.next.next;
      if (p === q) {
        let r = head;
        while(r !== q) {
          r = r.next;
          q = q.next;
        }
        return r;
      }
    }
    return null;
};
// @lc code=end

