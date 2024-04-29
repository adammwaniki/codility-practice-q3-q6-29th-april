# CODILITY INDIVIDUAL PRACTICE QUESTIONS

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.
Each question has its solution provided in a separate folder named according to
the question number.
To view each question, navigate into its folder where you will find a file called index.js wherein you will find code for the solution.

## Prerequisites

You will need the following to get started:

* a text editor or IDE ([Visual Studio Code](https://code.visualstudio.com/))

* node installed on your local machine ([nodejs.org](https://nodejs.org/en/))

* access to a coding playground in your browser eg. ([codepen.io](https://codepen.io/pen/)) or ([jsfiddle.net](https://jsfiddle.net/))

## Installing

* To get started, clone the repository to your local machine.
* Navigate into the folder where you have cloned the repository.
* Install any dependencies by running npm install in your terminal.
* To run the code, copy it and paste it into the javascript section of the coding playground in your browser.
* Run it in the coding playground and review the logs in the console.

## Running the tests

### Question 3

#### Algorithm

* This solution makes use of a for loop
* The loop serves to print out all the real 3 digit numbers (100 to 999)
* The loop is initialized at 999 so as to return the numbers in decreasing order
* The loop has its condition set and then decrements by one
* The solution is then tested by running the code in the coding playground and reviewing the logs in the console.

### Question 4

#### Algorithm

* This file contains two valid solutions to identify palindrome numbers
* Both solutions first make use of an if statement to handle numbers that cannot be palindromes
* The first solution then makes use of the toString method to convert the number to a string and then into an arrray which is then reversed, joined and then compared against the original number. This method despite being easier to read is not the most efficient.
* The second solution on the other hand makes use of a while loop without any conversion of types and as a result it has a constant space complexity and is more efficient
* The solution is then tested by running the code in the coding playground and reviewing the logs in the console.

### Question 5

#### Algorithm

* This solution makes use of a function that takes in a string as its argument
* It will then call the split method on the string to convert it into an array
* This array will then be filtered using a function that returns an array which will be converted back to a string with only unique characters at the first instance of the character (no duplicates allowed basically)
* The solution is then tested by running the code in the coding playground and reviewing the logs in the console.

### Question 6

#### Algorithm

* This solution takes in a two dimensional array, flattens it and then sorts it in ascending order
* The solution is then tested by running the code in the coding playground and reviewing the logs in the console
