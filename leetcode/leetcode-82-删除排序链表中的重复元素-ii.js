/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let vHead = new ListNode(-1,head)
  let curr = vHead
  let p = null
  while(curr.next) {
    if(curr.next.next && curr.next.val === curr.next.next.val) {
      p = curr.next.next
      while(p.next && p.val === p.next.val) {
          p = p.next
      }
      curr.next = p.next
    }else {
      curr = curr.next
    }
  }
  return vHead.next
};
// @lc code=end

