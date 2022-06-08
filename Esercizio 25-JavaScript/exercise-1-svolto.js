const person = {
  firstName: "",
  lastName: "",
  get firstName() {
    return this._firstName;
  },
  set firstName(nome) {
    this._firstName = nome;
  },

  get lastName() {
    return this._lastName;
  },
  set lastName(cognome) {
    this._lastName = cognome;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = Object.create(person);
const simon = Object.create(person);

john.fullName() = "John Doe";
simon.fullName() = "Simon Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins