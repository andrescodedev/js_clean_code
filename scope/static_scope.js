/* 
    STATIC SCOPE
*/

let age = 25;

function printAge() {
    console.log(age);
}

function mainApp() {
    let age = 20;
    printAge();
}

mainApp();//output: 25