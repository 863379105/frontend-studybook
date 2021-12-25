/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  let vHead = new ListNode()
  vHead.next = head
  let curr = vHead
  while(curr.next) {
      if(curr.next.val === val) {
          curr.next = curr.next.next
          return vHead.next
      }
      curr = curr.next
  }
};