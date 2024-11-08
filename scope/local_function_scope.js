/* 
    LOCAR SCOPE OR FUNCTION SCOPE

    - In a local or function scope, we can use global scope variables.
    - In a local or function scope, we can use variables of it's own scope.
    - The local or functions scope variables can't be to use in a global scope.
*/

function showGreeting() {
    let greet = 'Hello!!';

    console.log(greet); // output: Hello!!
}

showGreeting();
//console.log(greet); //ReferenceError

