// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const left = [];
//   const right = [];
//   const pivot = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [
//     ...quickSort(left),
//     pivot,
//     ...quickSort(right)
//   ]
// }

function quickSort(arr) {
  let length = arr.length;
  if (length <= 1) {
    return arr;
  }
  sortWithPivot(arr, 0, length - 1);
  function sortWithPivot(arr, left, right) {
    if ( left < right) {
      let pivotPos = partition(arr, left, right);
      sortWithPivot(arr,left,pivotPos - 1);
      sortWithPivot(arr,pivotPos + 1, right);
    }
  }
  function partition(arr, left, right) {
    let i = left, j = right + 1;
    let pivot = arr[left];
    while(1) {
      while(arr[++i] < pivot) {
        if (i === right) {
          break;
        }
      }
      while(arr[--j] > pivot) {
        if (j === left) {
          break;
        }
      }
      if (i >= j) {
        break;
      }
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    arr[left] = arr[j];
    arr[j] = pivot;
    return j;
  }
  return arr;
}