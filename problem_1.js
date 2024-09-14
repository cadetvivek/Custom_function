function customJoin(array, separator = ',') {
    // Handle empty array
    if (array.length === 0) {
      return '';
    }
  
    // Initialize variables
    let result = '';
    for (let i = 0; i < array.length; i++) {
      // Add the element to the result string
      result += array[i];
  
      // Add the separator if it's not the last element
      if (i < array.length - 1) {
        result += separator;
      }
    }
  
    return result;
  }
  
  const myArray = ['apple', 'banana', 'orange'];
  const joinedString = customJoin(myArray);
  console.log(joinedString); 