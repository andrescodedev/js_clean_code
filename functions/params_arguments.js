/* 
    PARAMS AND ARGUMENTS
*/

//function with parameter 'userName'
//A function must have a maximum of 3 params
/*function greatUser(userName) {
    console.log('Hello ',userName);
}*/


//Call function and send argument 'andrescorse'
//A function call must have a maximum of 3 arguments
//greatUser('andrescorse');

//A function with default parameter
/*function greatUser(userName = 'unknown') {
    console.log('Hello ', userName);
}

greatUser();
greatUser('muller');*/


//Spread operator ... as a parameter
/*function addOperation(operatorA, operatorB, ...operators)  {
    console.log(operators);
    console.log(operatorA + operatorB);
}

addOperation(1,2,3,4,5,6);*/


/*
    SPREAD OPERATOR TO CLONE OBJECTS 
*/
let course = {
    title: 'js clean code',
    content: 'The best practices to programming'
}

//before - copy an object
let courseClone = Object.assign({},course);

//now - copy an object with spread operator
let spreadCourseClone = {...course};

console.log(spreadCourseClone);


/* 
    SPREAD OPERATOR TO CLONE ARRAYS
*/

let courseSubjects = ['math','programming','physic'];
let courseSubjectsClone = [...courseSubjects];

console.log(courseSubjectsClone);


/* 
    SPREAD OPERATOR TO CONCATENATE MORE THAN 1 ARRAY
*/

let peopleNames = ['felipe','felipao','felipu'];
let peopleLastNames = ['rooney','ronaldo','pirlo'];

let namesAndLastNames = [...peopleNames, ...peopleLastNames];

console.log(namesAndLastNames);
