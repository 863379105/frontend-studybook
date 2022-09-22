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
  if (left === right) return head;
  let vNode = new ListNode(0,head);
  let p = head, pos = 1;
  let leftP, rightP;
  while(p) {
    if (pos === left) {
      leftP = p;
    }
    if (pos === right) {
      rightP = p.next;
      p.next = null;
      break;
    }
    p = p.next;
    pos++;
  }
  let newList = reverseList(leftP);
  p = vNode, pos = 0;
  while(p) {
    if (pos + 1 === left) {
      p.next = newList;
      leftP.next = rightP;
      return vNode.next;
    }
    pos++
    p = p.next;
  }
};
var reverseList = function(head) {
  let vNode = new ListNode(0,null);
  let p = head;
  while(p) {
    let t = p;
    p = t.next;
    t.next = vNode.next;
    vNode.next = t;
  }
  return vNode.next;
};
// @lc code=end

