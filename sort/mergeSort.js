function mergeSort(arr) {
  let length = arr.length;
  if ( length <= 1) {
    return arr;
  }
  let mid = length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return res.concat(left).concat(right);
}

const a = [2, 10, 8, 11, 12, 7, 1, 0, 22];
console.log(mergeSort(a));