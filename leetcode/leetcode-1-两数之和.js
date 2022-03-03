/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let data = [];
  nums.map((num,index) => {
    data.push({
      index: index,
      value: num
    })
  })
  data.sort((a,b) => a.value - b.value)
  for(let i = 0; i < data.length; i++) {
      let x = target - data[i].value;
      let left = i + 1, right = data.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(x < data[mid].value) {
          right = mid -1;
        } else if (x > data[mid].value) {
          left = mid +  1;
        } else {
          return [data[i].index,data[mid].index]
        }
      }
  }
};
// @lc code=end

