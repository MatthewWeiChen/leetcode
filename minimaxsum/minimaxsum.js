function miniMaxSum(arr) {
  const sortedArr = arr.sort();
  let min = 0;
  let max = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    min += arr[i];
  }

  for (let i = 1; i < sortedArr.length; i++) {
    max += arr[i];
  }

  console.log(`${min} ${max}`);
}
