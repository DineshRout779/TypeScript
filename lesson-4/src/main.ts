// type aliases

type StringOrNumber = string | number;
type StringOrNumberArray = StringOrNumber[];

type Person = {
  name: string;
  age: number;
  class: StringOrNumber;
  isAdmin?: boolean; // optional
  playlist: StringOrNumberArray; // this doesnt work in case of interface
};

let username: 'Dinesh' | 'Dave' | 'John';

username = 'Dave';

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a, b) => {
  return a * b;
};

logMsg(multiply(4, 5));

const addAdd = (a: number, b: number, c?: number) => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// rest params
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));
