class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj) {
    console.log(obj instanceof Person);
  }

}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};


const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);