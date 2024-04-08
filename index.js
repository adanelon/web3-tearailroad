// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Helper function to check if a number is a multiple of another number
  function isMultipleOf(number, multiple) {
    return number % multiple === 0;
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Helper function to truncate a string
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }
  
  // Testing the helper functions
  console.log(calculateCircleArea(5)); // Output: ~78.54 (approximately)
  console.log(isMultipleOf(10, 2)); // Output: true
  console.log(isPalindrome("level")); // Output: true
  console.log(truncateString("Hello, World!", 5)); // Output: "Hello..."
