/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let concatLength = Math.ceil(getLength(head) / 2)
  if(concatLength === 1) return
  let r = head
  let pre
  for(let i = 0; i < concatLength; i++) {
    pre = r
    r = r.next
  }
  pre.next = null
  let rList = reverseList(r)
  let p = head
  let q = rList

  let vHead = new ListNode()
  vHead.next = head
  let curr = vHead
  for(let i = 0; i < concatLength; i++) {
    let next = p.next
    curr.next = p
    curr = curr.next
    if(q) {
      p.next = q
      curr = curr.next
      q = q.next
    }
    p = next
  }
  curr.next = null
};
// 获取链表长度
const getLength = (head) => {
  let curr = head
  let length = 0
  while(curr) {
    curr = curr.next
    length++
  }
  return length
}
// 反转链表
const reverseList = (head) => {
  let vHead = new ListNode()
  let curr = head
  let next
  while(curr) {
    next = curr.next
    curr.next = vHead.next
    vHead.next = curr
    curr = next
  }
  return vHead.next
}
// @lc code=end

