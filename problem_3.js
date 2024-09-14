function customSlice(array, start = 0, end = array.length) {
    // Handle negative indices
    if (start < 0) {
      start += array.length;
      start = Math.max(start, 0);
    }
  
    if (end < 0) {
      end += array.length;
      end = Math.max(end, 0);
    }
  
    // Ensure end is not greater than array length
    end = Math.min(end, array.length);
  
    // Create a new array to store the sliced elements
    const result = [];
  
    // Iterate over the specified range
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
  
    return result;
  }

  const myArray = ['apple', 'banana', 'orange', 'grape'];

  // Slice elements from index 1 to 3 (exclusive)
  const slicedArray = customSlice(myArray, 1, 3);
  console.log(slicedArray); // Output: ['banana', 'orange']
