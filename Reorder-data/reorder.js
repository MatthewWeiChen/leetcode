//input: array
//output: array sorted


//iterate through array
//first index is a log (string)
//make string into an array
//iterate through string array
 //check index 1 if number or letter
 //if letter push into storage array for letters
//if number push into storage array for numbers
//sort storage array for letters
//combine arrays

var reorderLogFiles = function (logs) {
  const storageArr = [];
  const numArr = [];
  const letterArr = [];
  for(let i = 0; i < logs.length; i++){
    const tempArr = logs[i].split(' ');
    isNaN(tempArr[1]) ? letterArr.push(logs[i]) : numArr.push(logs[i]);
  }
  storageArr.push(letterArr, numArr);
  const flatArr = storageArr.flat();

  return flatArr;
};
