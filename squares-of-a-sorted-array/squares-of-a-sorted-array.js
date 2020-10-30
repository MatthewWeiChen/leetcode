var sortedSquares = function (A) {
  const sortedArr = [];
  A.map(num => sortedArr.push(Math.pow(num, 2)));
  sortedArr.sort((a, b) => a - b)
  return sortedArr;
};
