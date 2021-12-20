/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  if(k) k++
  function Node(e) {
    this.data = e || -1
    this.next = null
  }
  let vHead = new Node()
  let p = vHead
  while(k--) {
    let node = new Node()
    p.next = node
    p = p.next
  }
  p.next = vHead.next
  this.head = vHead.next
  this.rear = this.head
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull()) return false
  let p = this.head
  while(p.next !== this.head){ 
    p = p.next
  }
  p.data = value
  this.head = p
  return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull()) return false
  this.rear.data = value
  this.rear = this.rear.next
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false
  this.head.data = -1
  this.head = this.head.next
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false
  let p = this.head
  while(p.next !== this.rear){
    p = p.next
  }
  this.rear.data = -1
  this.rear = p
  return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty()) return -1
  return this.head.data
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) return  -1
  let p = this.head
  while(p.next !== this.rear){
    p = p.next
  }
  return p.data
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  if(this.rear === this.head) return true
  return false
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  if(this.rear.next === this.head) return true
  return false
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

