// Algorithm
// We start by declaring a function that takes in a string of words as its argument
// This function will return a call on the split method on the string using the spaces between the words as the location to split
// We then call the filter method on the array of words
// We then use the indexOf() method to check if the current word is the first occurrence in the string
// Then we can join the string and log it in the console as a variable (we can call it unique string since all its words are unique)
// We can run test cases by providing different strings
// The time complexity for this solution is 0(n^2) because the filter method is used on the array that is created and then the indexOf() method is called on each word in the array. worst case scenario it has to filter through the entire array to find the first occurrence of each word hence the exponential increase.
// I will need to find a less expensive solution probably using a Set() constructor so that everything is handled from inside the Set()
// On the other hand the space complexity is 0(n) because once we create the array using the split() method, there is no other action i.e. filter() or join() that will exceed the space complexity.


// Solution
function filterUniqueCharacters(str) {
    return str.split(" ").filter(function(char, index, self) { // This function takes three parameters: char for the current character, index for its index, and self for the array itself.
        // btw this could just as easily be an arrow function  
        // (char, index, self) => {
        // Check if the current character is the first occurrence in the string
        return self.indexOf(char) === index;
    }).join(" ");
}

// Test cases
const str = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
const uniqueStr = filterUniqueCharacters(str);

console.log(uniqueStr); // Output: "alpha beta gamma delta"
