function twoNumberSum(array, targetSum) {
  // Write your code here.
  const arrayLength = array.length;
  let result = new Set();
  let sum = 0;

  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      sum = array[i] + array[j];

      if (sum === targetSum) {
        result.add(array[i]);
        result.add(array[j]);
      }
    }
  }

  return Array.from(result);
}

const numbers = twoNumberSum([-3, 13, 7, 5, 15, 3, -5], 10);
console.log({numbers});
