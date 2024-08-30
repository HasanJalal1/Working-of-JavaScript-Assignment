// Q4. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign 
// them values and log their values to the console before and after they are declared to demonstrate variable 
// hoisting.


{
//     console.log(x);
//     console.log(y);
//     console.log(z);

    var x = "PW";
    let y = "Skills";
    const z = "!";

    console.log('After declaration, varVariable:', x);
    console.log('After declaration, LetVariable:', y);
    console.log('After declaration, ConstVariable:', z);
    console.log(x);
    console.log(y);
    console.log(z);
}


// {
// Trying to log values before they are declared
// try {
//     console.log('Before declaration, varVariable:', varVariable); // undefined due to hoisting
// } catch (error) {
//     console.error('Error accessing varVariable before declaration:', error.message);
// }

// try {
//     console.log('Before declaration, letVariable:', letVariable); // ReferenceError due to TDZ
// } catch (error) {
//     console.error('Error accessing letVariable before declaration:', error.message);
// }

// try {
//     console.log('Before declaration, constVariable:', constVariable); // ReferenceError due to TDZ
// } catch (error) {
//     console.error('Error accessing constVariable before declaration:', error.message);
// }

//     // Declaring variables
//     var varVariable = 'I am declared using var';
//     let letVariable = 'I am declared using let';
//     const constVariable = 'I am declared using const';

//     // Logging values after they are declared
//     console.log('After declaration, varVariable:', varVariable); // "I am declared using var"
//     console.log('After declaration, letVariable:', letVariable); // "I am declared using let"
//     console.log('After declaration, constVariable:', constVariable); // "I am declared using const"
// }
