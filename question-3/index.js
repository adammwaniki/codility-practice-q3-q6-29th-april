// Algorithm
// We will make use of a for loop since the challenge states that there is a given range of numbers i.e. three digit integers
// All these numbers exist between 100 and 999 (inclusive)
// Start with initializing the loop at 999 since the result needs to be returned in descending order
// the condition for the loop is that the integer is greater than or equal to 100
// The afterthought of the loop is that it will iterate over each number and decrement by one
// The statement of the loop is that it will log the integer into the console so that we can see all the numbers
// When it finishes with the loop we will log into the user a message indicating it is done

//Solution

for (let integer = 999; integer >= 100; integer -=1){
    console.log(integer);
}
console.log("All done!");
