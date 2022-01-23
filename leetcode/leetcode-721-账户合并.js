/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

class UnionSet{
  constructor(vertices) {
    this.father = {}
    vertices.map(v => {
      this.father[v] = v
    })
  }
  find(v) {
    if(this.father[v] === v) return this.father[v]
    this.father[v] = this.find(this.father[v])
    return this.father[v]
  }
  merge(a,b) {
    this.father[this.find(b)] = this.find(a)
  }
}

var accountsMerge = function(accounts) {
  let l = accounts.length
  let vertices = []
  while(l--) {
    vertices.push(l)
  }
  let hashMap = {}
  const u = new UnionSet(vertices)
  for(let i = 0; i < accounts.length; i++) {
    for(let j = 1; j < accounts[i].length; j++) {
      if(hashMap[accounts[i][j]] !== undefined){
        u.merge(i,hashMap[accounts[i][j]])
      }else{
        hashMap[accounts[i][j]] = i
      }
    }
  }
  let accountsMap = {}
  for(let i = 0; i < accounts.length; i++) {
    let root = u.find(i)
    if(!accountsMap[root]){
      accountsMap[root] = new Set(accounts[i].slice(1,accounts[i].length))
    }else{
      accounts[i].slice(1,accounts[i].length).map(account => {
        accountsMap[root].add(account)
      })
    }
  }
  let newAccounts = []
  for(let key in accountsMap) {
    let account = []
    account.push(accounts[key][0])
    let arr = accountsMap[key]
    arr = Array.from(arr) 
    arr.sort()
    arr.map(a => {
      account.push(a)
    })
    newAccounts.push(account)
  }
  return newAccounts
};
// @lc code=end