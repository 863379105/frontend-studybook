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
  let fast = head
  let slow = head
  if(!fast || !fast.next || !fast.next.next) return null
  while(fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
      if(fast === slow) break
  }
  if(fast.next && fast.next.next) {
      let p = head
      while(p !== fast) {
          p = p.next
          fast = fast.next
      }
      return p
  }
  return null
};