function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
//absolute difference between current node and target
//compare the absolute difference between the closest and target
//in the end compare the two results
//then update the closest variable with the current node

//every number of the left of root node is less than the root node

// |12 - 10| > |12 - 10| = false;
// 12 < 10 = false;
// 12 > 10 = true; return function but with value of right node (15);

// |12 - 10| > |12 - 15|
// 12 < 15 = true; return function but with value of left node (13;

//|12 - 10| > |12 - 13| = true;
//closest gets reassigned the node value (13);
//closest is now 13
