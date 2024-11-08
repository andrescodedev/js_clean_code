/* 
    ARROW FUNCTIONS
*/

let getName = () => 'Andrew';

 console.log(getName());

 // arrow functions inside objects
 let customer = {
    name: 'andrew',
    lastName: 'maldini',
    age: 25,
    information: () => `My age is ${this.age}`, //undefined
    presentation() {
        console.log(`My name is ${this.name} ${this.lastName}`);
    }
 }

 customer.presentation();//output: My name is andrew maldini
 console.log(customer.information()); // undefined

