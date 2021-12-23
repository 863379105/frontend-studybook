/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
// Node 节点
function Node(val) {
  this.val = val || 0
  this.next = null
}

var MyLinkedList = function() {
  this.head = null
  this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.length) return -1
    let p = this.head
    while(index--) {
        p = p.next
    }
    return p.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new Node(val)
    let p = this.head
    if(p) {
        node.next = this.head
        this.head = node
    } else {
        this.head = node
    }
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new Node(val)
    let p = this.head
    if(p) {
        while(p.next) {
            p = p.next
        }
        p.next = node
    }else {
        this.head = node
    }
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.length) return 
    let node = new Node(val)
    let p = this.head
    if(index <= 0) {
        node.next = p
        this.head = node
    } else {
        let pre
        for(let i = 0; i < index; i++) {
            pre = p
            p = p.next
        }
        pre.next = node
        node.next = p
    }
    this.length++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(!this.head) return -1
    if(index < 0 || index >= this.length) return -1
    let p = this.head
    if(index === 0) {
        this.head = p.next
    } else {
        let pre
        while(index--) {
            pre = p
            p = p.next
        }
        pre.next = p.next
    }
    this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

