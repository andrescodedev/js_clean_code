/* 
    HOW TO ORGANIZE A CLASS

    1. Properties / attributes
    2. Constants
    3. Static Variables
    4. Methods (from most important to least important)
    5. Static methods/functions
    6. Getters and setters
*/

class OrganizeClass {
    //1. Properties
    #name;
    #lastName;
    #email;

    //2. Constants
    #TOKEN = '1235ghjkl';

    //3. Static variables
    static subscription;

    //4. Methods
    constructor(name, lastName, email, subscription) {
        this.#name = name;
        this.#lastName = lastName;
        this.#email = email;
        OrganizeClass.subscription = subscription;
    }

    //4.1 most important method in the class
    authUser() {
        if(OrganizeClass.#validateSubscription() === true && this.#TOKEN != '') {
            console.log(`User authenticated successfully`);

        } else {
            console.log(`Sorry, you don't authenticated`);
        }
    }

    //5. Static methods
    static #validateSubscription() {
        return OrganizeClass.subscription;
    }

    //6. Getters and setters
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

}

const user1 = new OrganizeClass('Gio','Kennedy','gkennedy@gmail.com',true);
user1.authUser();

OrganizeClass.subscription = false;
user1.authUser();
