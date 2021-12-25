/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1,l2);
    if(l1.val === 0 || l2.val === 0) return l1.val===0 ? l2 : l1 
    let rl1 = reverseList(l1)
    let rl2 = reverseList(l2)
    let p = rl1
    let q = rl2
    let vHead = new ListNode()
    let r = vHead
    let cnt = 0
    while(p && q) {
      let node = new ListNode(p.val+q.val+cnt)
      if(node.val >= 10) {
        cnt = 1
        node.val = node.val % 10
      } else {
        cnt = 0
      }
      r.next = node
      r = r.next
      p = p.next
      q = q.next
    }
    let tail = p ? p : q
    if(cnt === 1) {
      if(tail){
        tail = reverseList(addTwoNumbers(reverseList(tail),new ListNode(cnt)))
      }else{
        tail = new ListNode(cnt)
      }
    }
    r.next = tail
    return reverseList(vHead.next)
};
var reverseList = function(head) {
  let vHead = new ListNode()
  let curr = head
  while(curr) {
      let next = curr.next
      curr.next = vHead.next
      vHead.next = curr
      curr = next
  }
  return vHead.next
}
// @lc code=end

