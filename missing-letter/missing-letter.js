//function takes an array of increasing letters and return missing letter
//input ["a", b, c, e, ,f,g]
//output "d"
​
//[e,f,h]
//4,5,7
//g /6
​
//data structure (array) that has the entire alphabet
//indexof first index of input array in the alphabet
//iterate through array
//loop through input array and find letter in alphabet and it's index
//check the next letter if it matches with next letter in alphabet array
//placeholder array
//certain amt is input array's length
//push into placeholder array and compare input array with placeholder array
​
function missingLetter(arr) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const lowerCaseArr = arr.map(index=>index.toLowerCase());
  let firstIndex = alphabet.indexOf(lowerCaseArr[0]);
  if(arr[0] === arr[0].toUpperCase()){
    for(let i = 0; i < arr.length; i++){
    if(lowerCaseArr[i] !== alphabet[firstIndex]){
      return alphabet[firstIndex].toUpperCase();
    } else {
      firstIndex++;
    }
  }
  } else {
    for(let i = 0; i < arr.length; i++){
    if(arr[i] !== alphabet[firstIndex]){
      return alphabet[firstIndex];
    } else {
      firstIndex++;
    }
  }
  }
}

missingLetter = a =>
  String.fromCharCode(a.map(c => c.charCodeAt() + 1)
                      .find((n, i, v) => n+1 < v[i+1]))
