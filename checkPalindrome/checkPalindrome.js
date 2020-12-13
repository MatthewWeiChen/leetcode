function checkPalindrome(inputString) {
    const arrString = inputString.split('');
    const reverseArr = arrString.reverse();
    const reverseJoined = reverseArr.join('')
   return inputString === reverseJoined;
}
