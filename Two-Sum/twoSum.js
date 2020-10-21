// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

var twoSum = function (nums, target) {
  const indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let value = target - number;
    const indexNum = nums.indexOf(value);
    if (indexNum !== -1) {
      indexArr.push(i);
      indexArr.push(indexNum)
      return indexArr;
    }
  }
  return indexArr;
};
