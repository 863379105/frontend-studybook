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
 var reverseList = function(head) {
  let newHead = null
  let current = head
  while(current) {
      let p = current.next
      current.next = newHead
      newHead = current
      current = p
  }
  return newHead
};