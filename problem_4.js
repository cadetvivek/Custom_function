function customSubstring(str, startIndex, endIndex = str.length) {
    // Handle negative indices
    if (startIndex < 0) {
      startIndex += str.length;
      startIndex = Math.max(startIndex, 0);
    }
  
    if (endIndex < 0) {
      endIndex += str.length;
      endIndex = Math.max(endIndex, 0);
    }
  
    // Ensure endIndex is not greater than string length
    endIndex = Math.min(endIndex, str.length);
  
    // Create a new string to store the substring
    let substring = '';
  
    // Iterate over the specified range
    for (let i = startIndex; i < endIndex; i++) {
      substring += str[i];
    }
  
    return substring;
  }

  const myString = 'Hello, world!';

// Extract a substring from index 7 to 12 (exclusive)
const substring = customSubstring(myString, 7, 12);
console.log(substring); // Output: 'world'