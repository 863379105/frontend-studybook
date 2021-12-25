/**
 * Initialize your data structure here.
 */
 function Node(val) {
  this.val = val ? val : null
  this.next = null   
}
var MyQueue = function() {
  this.head = null
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  if(!this.head){
      this.head  = new Node(x)
      return
  }
  let p = this.head
  while(p.next) {
      p = p.next
  }
  p.next = new Node(x)
  return
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if(this.empty()) return false
  let p = this.head
  this.head = this.head.next
  return p.val
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.head.val
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.head ? false : true
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/