function customLastIndexOf(array, searchElement, fromIndex = array.length - 1) {
    // Ensure fromIndex is within the array bounds
    fromIndex = Math.min(fromIndex, array.length - 1);
    fromIndex = Math.max(fromIndex, 0);
  
    // Iterate backwards from the specified index
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  
    return -1;
  }

  const myArray = ['apple', 'banana', 'orange', 'apple'];

// Find the last index of "apple"
const lastIndex = customLastIndexOf(myArray, 'apple');
console.log(lastIndex); // Output: 3