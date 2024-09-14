function customIncludes(array, searchElement, fromIndex = 0) {
    // Handle negative fromIndex
    if (fromIndex < 0) {
      fromIndex += array.length;
      fromIndex = Math.max(fromIndex, 0);
    }
  
    // Iterate from the specified index
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        return true;
      }
    }
  
    return false;
  }

  const myArray = ['apple', 'banana', 'orange'];

// Check if the array includes "banana"
const includesBanana = customIncludes(myArray, 'banana');
console.log(includesBanana); // Output: true