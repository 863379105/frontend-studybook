/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let reverseNum = 0
  let mergeSort = (array) => {
    let len = array.length
    
    if(len < 2) return array
    
    let mid = len / 2
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(mergeSort(left),mergeSort(right)) 
  }
  let merge = (left,right) => {
    let n = 0 , m = 0 , array = []
    while(n < left.length && m < right.length) {
      if(left[n] <= right[m]) {
        array.push(left[n++])
        console.log(reverseNum,m);
        reverseNum += m
      } else {
        array.push(right[m++])
      }
    }
    if(m === right.length) {
      console.log(reverseNum,"-",m,"-",left.length,"-",n);
      reverseNum += m * (left.length - n)
      return array.concat(left.slice(n))
    } else {
      return array.concat(right.slice(m))
    }
  }
  mergeSort(nums)
  return reverseNum
};
