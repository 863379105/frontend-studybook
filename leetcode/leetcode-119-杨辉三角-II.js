/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let triggle = [];
  triggle[0] = [1];
  triggle[1] = [1,1];
  for (let i = 2; i <= rowIndex; i++) {
    triggle[i] = []
    triggle[i][0] = 1;
    triggle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triggle[i][j] = triggle[i-1][j-1] + triggle[i-1][j];
    }
  }
  return triggle[rowIndex];
};