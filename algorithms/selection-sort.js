
/**
 * Sorts an array of numbers using the selection sort
 * algorithm.
 * 
 * #### Complexity: O(n^2)
 * 
 * @param { Array<Number> } numArray
 * @returns { Array<Number> }
 */
const sort = (numArray) => {
  let indexOfCurrentLeast = 0;

  for (let i = 0; i < numArray.length; i++) {
    indexOfCurrentLeast = i;

    for (let j = i+1; j < numArray.length; j++) {
      if (numArray[indexOfCurrentLeast] > numArray[j]) {
        indexOfCurrentLeast = j;
      }
    }

    if (indexOfCurrentLeast !== i) {
      const currentLeast = numArray[i];
      numArray[i] = numArray[indexOfCurrentLeast];
      numArray[indexOfCurrentLeast] = currentLeast;
    }
  }

  return numArray;
}

const sortedNumList = sort([12, 3, 1, 67, 9, 32, 10, 1]);
console.log(sortedNumList);