/**
 * @param {string} text
 * @return {number}
 */

//input is a string
//output is a number
//counter for each letter
//loop through the string, count each time a letter in the data structure is found
//return the lowest counter
//if one letter counter = 0; return 0

var maxNumberOfBalloons = function (text) {
  let bCounter = 0;
  let aCounter = 0;
  let lCounter = 0;
  let oCounter = 0;
  let nCounter = 0;
  text.split("").forEach((letter) => {
    if (letter === "b") {
      bCounter++;
    }
    if (letter === "a") {
      aCounter++;
    }
    if (letter === "l") {
      lCounter++;
    }
    if (letter === "o") {
      oCounter++;
    }
    if (letter === "n") {
      nCounter++;
    }
  });

  if (
    bCounter === 0 ||
    aCounter === 0 ||
    lCounter < 2 ||
    oCounter < 2 ||
    nCounter === 0
  ) {
    return 0;
  } else {
    return Math.min(
      bCounter,
      Math.floor(lCounter / 2),
      Math.floor(oCounter / 2),
      aCounter,
      nCounter
    );
  }
};
