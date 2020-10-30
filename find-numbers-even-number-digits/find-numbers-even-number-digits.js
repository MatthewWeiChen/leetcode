
var findNumbers = function (nums) {
  let count = 0;
  nums.map(num => {
    let letters = String(num);
    if (letters.length % 2 === 0) count++
  });
  return count;
};
