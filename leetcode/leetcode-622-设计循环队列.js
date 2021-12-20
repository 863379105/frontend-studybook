/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  if(k){
    k = k + 1
  }
  function Node(e){
    this.data = e || -1
    this.next = null
  }
  let vHead = new Node()
  this.length = 0
  let p = vHead
  while(k--) { // 创建队列
    let node = new Node()
    p.next = node 
    p = p.next
    this.length++
  }
  this.length--
  p.next = vHead.next// 成环
  this.head = vHead.next // 头指针
  this.rear = this.head // 尾指针
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()) return false
  this.rear.data = value
  this.rear = this.rear.next
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()) return false
  this.head.data = null
  this.head = this.head.next
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()) return -1
  return this.head.data
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()) return -1
  let p = this.head
  while(p.next !== this.rear) {
    p = p.next
  }
  return p.data
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  if(this.head === this.rear) return true
  return false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if(this.rear.next === this.head) return true
  return false
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

