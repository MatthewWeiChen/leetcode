//both arrays are sorted
//compared both arrays and push
//storage array
//while loop checking mergedArray.length < myArray.length + alicesArray.length
//compare both indexes and the smaller one pushes to array
function mergeArrays(myArray, alicesArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}
