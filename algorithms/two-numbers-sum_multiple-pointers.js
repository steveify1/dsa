function twoNumberSum(array, targetSum) {
  // Write your code here.
  const arrayLength = array.length;
  let leftPointer = 0;
  let rightPointer = 1;
  let currentSum = 0;
  let result = new Set();

  while(leftPointer < arrayLength - 1) {
    currentSum = array[leftPointer] + array[rightPointer];
    
    if (currentSum === targetSum) {
      result.add(array[leftPointer]);
      result.add(array[rightPointer]);
    }

    if (rightPointer == arrayLength - 1) {
      leftPointer++;
      rightPointer = leftPointer + 1;
    } else {
      rightPointer++;
    }

    console.log({currentSum, leftPointer, rightPointer});
  }

  return Array.from(result);
}

const numbers = twoNumberSum([-3, 13], 10);
console.log({numbers});
