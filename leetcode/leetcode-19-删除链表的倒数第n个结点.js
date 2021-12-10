/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let vHead = new ListNode(-1,head)
  let next = head
  let previous = vHead
  while(--n) {
   next = next.next
  }
  while(next.next){
    previous = previous.next
    next = next.next
  }
  previous.next = previous.next.next
  return vHead.next
}

