function substractSumOfDiagonal(array) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let len = array.length;

  for (let i = 0, j = len - 1; i < len, j >= 0; i++, j--) {
    firstDiagonal += array[i][i];
    secondDiagonal += array[i][j];
  }

  const result = firstDiagonal - secondDiagonal;
  return result;
}

console.log(
  substractSumOfDiagonal([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
