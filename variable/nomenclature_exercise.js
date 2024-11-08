//ARRAYS
// BAD
const x = [1, 2, 3, 4, 5];
const name = ['Cande', 'Alex', 'Mariana'];
const colors = ['red', 'green', 'blue'];

//GOOD
let numbersList = [1, 2, 3, 4, 5];
let namesList = ['Cande', 'Alex', 'Mariana'];
let colorsList = ['red', 'green', 'blue'];


//BOOLEANS
//BAD
const active = true;
const correct = false;
const write = true;
const user = false;

//GOOD
let isActive = true;
let isCorrect = false;
let canWrite = true;
let hasUser = false;


//NUMBERS
//BAD
let result = 3543;
const y = 20;
const PI = 3.14159 ;

//GOOD
let totalResult = 3543;
let minYValue = 20;
const PINumber = 3.14159;


//FUNCTIONS
//BAD
sendAlertIfIsEmpty();
ifNotExistCreateNewObject();
password();
results();

//GOOD
sendAlert();
crateAlert();
validatePassword();
showResults();


//CLASSES
//BAD
class School {} // is good
class NewService {}
class ImplementNewAccount {}

//GOOD
class Service {}
class Account {}
