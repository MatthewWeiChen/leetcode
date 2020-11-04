//input array of characters
//example: [a,b,c,d]
//output example: [d,c,b,a]

//variable to hold first and last index
//loop backwards and assign it to a new index?

function reverse(arrayOfChars){
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while(leftIndex < rightIndex){
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
}
