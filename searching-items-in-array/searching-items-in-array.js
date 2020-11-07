var checkIfExist = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (counter === arr.length) {
      return false;
    }
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
        return true;
      }
    }
  }
};
