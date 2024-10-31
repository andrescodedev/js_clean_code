/* 
    RULES NOMENCLATURE

    - Names of variables must be pronounceable and expressives
    - Names without technique information
    - Use ubiquitous language
    - camelCase structure
*/


// NAMES OF VARIABLES MUST BE PRONOUNCEABLE AND EXPRESSIVES
//NOT RECOMMENDED
const yyyymmdstr = moment().format("YYYY/MM/DD");

// RECOMMENDED
const currentDate = moment().format("YYYY/MM/DD");


//NAMES WITHOUT TECHNIQUE INFORMATION
//NOT RECOMMENDED
let arrayNames = ['Lora','Lore'];

// RECOMMENDED
let namesList = ['lora','lore'];


//USE UBIQUITOUS LANGUAGE
//NOT RECOMMENDED
getUserInfo();
getClientData();
getCustomerRecord();

//RECOMMENDED
getUser();


/* 
    HOW TO NAME ACCORDING TO DATA TYPE
*/

//In ARRAYS - RECOMMENDED
let usersNames = ['lora','lore'];

//IN BOOLEANS - RECOMMENDED (is, has, can)
let isValid = true;
let canWrite = false;
let hasColor = true;

//IN NUMBERS - RECOMMENDED (max, min, total)
let maxUsers = 50;
let minUsers = 10;
let totalUsers = 20;

//IN FUNCTIONS OR METHODS - RECOMMENDED (verb(action) + noun(it on apply the action) = getUser)
createUser();
updateUser();
sendEmail();
getUser();
setUser();
isValidUser();

//IN CLASSES - RECOMMENDED
class User{}
class UserProfile{}
class Account{}

