/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
  let previous = head
  if(previous && previous.next) {
    let current = previous.next
    while(current) {
      if(previous.val === current.val) {
        previous.next = current.next
        current = current.next
      }else {
        previous = previous.next
        current = current.next
      }
    }
  }
  return head
};
// @lc code=end

