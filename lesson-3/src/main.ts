let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

let tests: string[] = ['abcs'];

tests.push('jest');

// tuple
const person: [string, number, boolean] = ['Dinesh', 23, false];

let myObject: object;
myObject = [];

type Person = {
  name: string;
  age: number;
  class: string | number;
  isAdmin?: boolean; // optional
};

const dinesh: Person = {
  name: 'Dinesh Rout',
  age: 23,
  class: 'MCA',
};

const isAdmin = (person: Person) => {
  if (person.isAdmin) {
    return person.isAdmin;
  }
  return false;
};

enum Grades {
  O = 1,
  E,
  A,
  B,
  C,
  D,
  F,
}
