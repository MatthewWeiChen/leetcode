//Logarithms in sorting
/*
Sorting costs O(nlog2n)
*/

function mergeSort(arrayToSort){
  if(arrayToSort.length < 2){
    return arrayToSort;
  }

  //Divide the array in half

  const midIndex = Math.floor(arrayToSort.length / 2);
  const left = arrayToSort.slice(0,midIndex);
  const right = arrayToSort.slice(midIndex);

  //Sort each half

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  //Merge the sorted halves

  const sortedArr = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while(sortedArr.length < left.length + right.length){

    //sortedLeft's first element comes next
    //if it's less than sortedRight's first
    //element or if sortedRight is exhausted

    if(currentLeftIndex < left.length && (currentRightIndex === right.length ||
    sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])){
      sortedArr.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex += 1;
    }
  }

  return sortedArr;

}
