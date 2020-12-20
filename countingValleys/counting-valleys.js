function countingValleys(n, s) {
  let currLevel = 0;
  let valleys = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'U') {
      currLevel++;
      if (currLevel == 0) {
        valleys += 1;
        console.log(valleys);
      }
    } else {
      currLevel -= 1;
    }
  }
  return valleys;

}
