/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function() {
  this.userMap = {
  }
  this.time = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  if(!this.userMap[userId]) this.userMap[userId] = {messages:[],flowers: []}
  this.userMap[userId].messages.unshift({tweetId,time:this.time++})
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  if(!this.userMap[userId]) return []
  let list = []
  console.log(this.userMap[userId].flowers);
  if(this.userMap[userId].flowers) {
    this.userMap[userId].flowers.map(flowerId => {
      if(this.userMap[flowerId].messages) {
        list = list.concat(this.userMap[flowerId].messages)
      }
    })
  }
  list = list.concat(this.userMap[userId].messages)
  list.sort((a,b) => b.time - a.time)
  let messagesList = []
  list.map(message => {
    messagesList.push(message.tweetId)
  })
  let len = messagesList.length
  return len > 10 ? messagesList.slice(0,10) : messagesList
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if(!this.userMap[followerId]) this.userMap[followerId] = {messages:[],flowers: []}
  if(!this.userMap[followeeId]) this.userMap[followeeId] = {messages:[],flowers: []}
  if(!this.userMap[followerId].flowers.includes(followeeId)) {
    this.userMap[followerId].flowers.push(followeeId)
  }
  
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if(followerId === followeeId) return
  let index = this.userMap[followerId].flowers.indexOf(followeeId)
  if(index === -1) return
  this.userMap[followerId].flowers.splice(index,1)
  console.log(this.userMap[followerId].flowers);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

