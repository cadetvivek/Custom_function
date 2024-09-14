function customReplace(str, searchValue, replaceValue) {
    // Handle regular expressions
    if (searchValue instanceof RegExp) {
      // For regular expressions, we'll use a simple implementation
      return str.replace(searchValue, replaceValue);
    }
  
    // For literal strings, find the first occurrence
    const index = str.indexOf(searchValue);
    if (index === -1) {
      // If not found, return the original string
      return str;
    }
  
    // Create a new string with the replacement
    const newStr = str.substring(0, index) + replaceValue + str.substring(index + searchValue.length);
  
    return newStr;
  }



  const myString = 'Hello, world!';

// Replace "world" with "there"
const newString = customReplace(myString, 'world', 'there');
console.log(newString); // Output: Hello, there!

// Replace all occurrences of "o" with "a" (using a regular expression)
const newString2 = customReplace(myString, /o/g, 'a');
console.log(newString2); // Output: Halla, warld!