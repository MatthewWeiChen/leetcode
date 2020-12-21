function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeroes = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positive++
    } else if(arr[i] < 0){
      negative++
    } else {
      zeroes++
    }
  }
console.log(positive/arr.length);
console.log(negative/arr.length);
console.log(zeroes/arr.length)
}
