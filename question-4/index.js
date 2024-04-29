// Algorithm
// We start by declaring a function that takes in a number as its parameter
// We then create a condition to eliminate numbers that we know cannot be palindromes i.e. numbers that are less than 0 (negative on the number scale) or numbers that are divisible by 10 because when reversed the trailing zero will not be considered as part of the number e.g. 1210 when reversed will be 121
// We can then create a variable that will hold the reversed number
// We can, thereafter, call the toString()method on the number and then split it into an array of characters
// We can then use the reverse() method to reverse the array of characters
// We can then use the join() method to join the array of characters back into a string
// We can then use the parseInt() method to convert the string back into a number
// we can then return a comparison operator for the two numbers whereby if the original number is the same as the reversed number it returns true else false
// I like this method because it's easy to read but it is not the most efficient
// It has a space complexity of 0(n) because the space complexity of converting a number to a string is 0(n) where n is the number of digit in the integer and the space complexity of splitting an array is 0(n)
// As a result this solution does not work well with larger number operations or situations with limited memory resources


// Solution #1
function palindrome(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
      return false;
    }
    
    // Convert number to string, split into array, reverse, and join back to string
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    
    // Check if original number is the same as the reversed number
    return num === reversed;
  }
  
// Test Cases
console.log(palindrome(121)); // true
console.log(palindrome(-121)); // false
console.log(palindrome(10)); // false
console.log(palindrome(-101)); // false
console.log(palindrome(11)); // true
console.log(palindrome(123421)); // false
console.log(palindrome(1221)); // true
console.log(palindrome(4343434)); // true
  


// Making a more efficient solution with a space complexity of 0(1) i.e constant
// The only extra space used here is for the variable reversed, which stores the reversed number as we iterate through the digits of the input number.


//Solution #2
function palindrome(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) {
    return false;
  }
  let reversed = 0;
  while (num > reversed) { // This loop runs as long as the original number (num) is greater than the reversed number (reversed). This loop effectively iterates through the digits of the input number from right to left.
    reversed = (reversed * 10) + (num % 10); // Inside the loop, we're updating the reversed variable by appending the last digit of the original number to the end of reversed. We do this by multiplying reversed by 10 (shifting its digits left by one place) and then adding the last digit of num (obtained using the modulus operator %)
    num = Math.floor(num / 10); // Inside the loop, we're updating the num variable by removing its last digit. We do this by dividing num by 10 and taking the integer part using Math.floor(). This effectively shifts num's digits right by one place
  }
  return num === reversed || num === Math.floor(reversed / 10);
}

// Test cases are the same as before
