//Binary Search
/*
  Algorithm for finding a target number in a sorted array
  1. Start with the middle number: is it bigger or smaller than our target number?
  -array is sorted can find out if it is left half or right half of array
  2. Divided the problem in half
  3. Repeat the same approach (of starting in the middle) on the new half-size problem
  -do it again and again until we either find the number or "rule out" the whole set.
  O(log2n)
*/

function binarySearch(target, nums){
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  while(floorIndex + 1 < ceilingIndex){
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if(guessValue === target){
      ceilingIndex = guessIndex;
    } else {
      floorIndex = guessIndex;
    }
  }
  return false;
}

/*
nums.length = 4;
distance = 4 - 0;
halfDistance = 2;
guessIndex = -1 + 2 = 1;
guessValue = nums[1];
*/
