// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside 
// the function using the var keyword and log its value to the console before it is assigned a value to 
// demonstrate variable hoisting.

function addNumber(a,b){
    var sum;
    sum=a+b;
    return sum;
}
console.log(addNumber(10,10));