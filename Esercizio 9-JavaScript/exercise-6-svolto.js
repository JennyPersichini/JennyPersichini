function getKeys(obj) {

    for(let keys in obj) {
      console.log(keys);
    }
  }
  
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    city: 'Rome',
    job: 'Developer',
  };
  
  const keys = getKeys(person);
  console.log(keys);