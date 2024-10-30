/* 
    RULES NOMENCLATURE

    - Names of variables must be pronounceable and expressives
    - Names without technique information
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