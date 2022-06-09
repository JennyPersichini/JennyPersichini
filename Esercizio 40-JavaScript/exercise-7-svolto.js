class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(persona) {
        this._firstName = persona;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(persona) {
        this._lastName = persona;
    }

    get age() {
        return this._age;
    }
    set age(persona) {
        this._age = persona;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(persona) {
        this.fullName = persona;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);