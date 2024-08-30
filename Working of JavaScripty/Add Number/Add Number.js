// 01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call 
// the function before it is declared to demonstrate hoisting.

// Calling the function before it is declared
console.log(addNumbers(5, 10)); // 15

// Function declaration
function addNumbers(a, b) {
    return a + b;
}