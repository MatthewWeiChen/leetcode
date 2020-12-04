function sliceSum(arr, n) {
  let sum = 0;
  if (n > arr.length) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  } else {
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }
  }
  return sum;
}
