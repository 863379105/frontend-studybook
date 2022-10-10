/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let createdNodes = new Map();
    let p = head;
    let newHead = new Node();
    while (p) {
      if (createdNodes.has(p)) {
        newHead.next = createdNodes.get(p);
        if (!p.random) {
          newHead.next.random = null;
        } else if (createdNodes.has(p.random)) {
          newHead.next.random = createdNodes.get(p.random);
        } else {
          let newNode = new Node(p.random.val, null, null);
          createdNodes.set(p.random, newNode);
          newHead.next.random = newNode;
        }
        newHead = newHead.next;
      } else {
        let newNode = new Node(p.val, null, null);
        createdNodes.set(p, newNode);
        newHead.next = newNode;
        if (!p.random) {
          newHead.next.random = null;
        } else if (createdNodes.has(p.random)) {
          newHead.next.random = createdNodes.get(p.random);
        } else {
          let newNode = new Node(p.random.val, null, null);
          createdNodes.set(p.random, newNode);
          newHead.next.random = newNode;
        }
        newHead = newHead.next
      }
      p = p.next;
    }
    return createdNodes.get(head);
};
// @lc code=end

