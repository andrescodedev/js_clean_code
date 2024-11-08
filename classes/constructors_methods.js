/* 
    CONSTRUCTORS AND METHODS
*/

class Dog {
    #name;
    #race;

    constructor(name, race) {
        this.#name = name;
        this.#race = race;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get race() {
        return this.#race;
    }

    set race(race) {
        this.#race = race;
    }

    introduceDog() {
        return `It's name is ${this.#name} and it's race is ${this.#race}`;
    }
}

const dog1 = new Dog('Locky','Doverman');

console.log(dog1);
console.log(dog1.introduceDog());
console.log(dog1.name);
console.log(dog1.race);