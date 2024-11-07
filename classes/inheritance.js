/* 
    INHERITANCE IN OOP
*/

class Pet {
    #name;
    #race

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

    showInformation() {
        return  `It's name is ${this.#name}, it's race is ${this.#race}`;
    }
}

class Dog extends Pet {

    constructor(name, race) {
        super(name, race);
    }

    //override - polimorfismo
    showInformation() {
        return super.showInformation() + ` and It makes Guauu`;
    }
}

class Cat extends Pet {

    constructor(name, race) {
        super(name, race);
    }

    showInformation() {
        return super.showInformation() + ` and It makes Miauuuuu`;
    }
}

const luka = new Dog('Luka','Doverman');
const modric = new Cat('Modric','Ragdoll');

console.log(luka.showInformation());
console.log(modric.showInformation());