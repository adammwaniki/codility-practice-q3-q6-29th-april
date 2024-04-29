// Algorithm 
// Declare a variable that takes in a two dimensional array (i.e. it has a depth of two levels)
// We want it to return an array that has a depth of 1 so we can either specify the depth we want in the flat(depth) method or we can use the flat method without specifying the depth since it will default to one
// Declare a variable that will hold the flattened array. we can append the option to sort using dot notation for ease of reading
// Since we are dealing with an array of numbers we must insert a compare function in the sort method to sort the array of numbers in ascending order
// This is best practice because if we don't, the array elements are converted to strings, then sorted according to each character's Unicode code point value which can result in conflicts
// If we were sorting strings we would use the .sort() method without a compare function
// This solution has a time complexity of 0(n log n) because the sort() method makes use of a binary search through the array where it takes each value and compares it to the next so as to determine if its at the correct index in the array. 
// This is a logarithmic time complexity because it is a logarithmic function. The number of operations is proportional to the logarithm of the number of items in the array.
// On the other hand the space complexity is 0(n) because we are creating a new array that is the same length as the original array since the sort() method even preserves empty slots



// Solution
const arraySample = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
const flattenedArray = arraySample.flat().sort((a, b) => a - b);

console.log(flattenedArray);
