/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  let vHead = new ListNode(-1,head) // 设置虚拟头节点
  let current_1 = vHead
  for(let i = 0; i < left - 1; i++) {
    current_1 = current_1.next
  }
  head = current_1.next // 指向待反转部分起点
  current_1.next = null // 切断左边链表

  let current_2 = head
  for(let i = 0; i < right - left; i++) {
    current_2 = current_2.next
  }
  let rightLinkedNode = current_2.next // 设置反转节点左边链表
  current_2.next = null // 切断待反转链表与右边链表联系，此时待反转链表为head

  reverseLinkedList(head) // 反转链表
  current_1.next = current_2 // 链接左边部分
  head.next = rightLinkedNode // 链接右边部分
  return vHead.next
}
const reverseLinkedList = function(head) {
  let newLink = null
  let current = head
  while(current) {
    let p = current.next
    current.next = newLink
    newLink = current
    current = p
  }
}
