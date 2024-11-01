/* 
    GLOBAL SCOPE
*/

//variable of global scope
let greeting ='Hello wordl';

function showGreeting() {
    //a function is local scope
    //in a local scope, we can use global scope variables
    console.log(greeting);
}

showGreeting();
