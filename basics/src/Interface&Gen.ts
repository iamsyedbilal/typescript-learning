// Interface defines the structure of a User object
interface User {
  name: string;
  age: number;

  // Method definition
  greet(): void;
}

// Object following the interface
const user1: User = {
  name: "Ali",
  age: 22,

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user1.greet();

interface Product {
  name: string;
  price: number;

  // Optional property
  description?: string;
}

const item1: Product = {
  name: "Laptop",
  price: 1200,
};

const item2: Product = {
  name: "Phone",
  price: 800,
  description: "Latest model",
};

interface MathOperation {
  (a: number, b: number): number;
}

// Function matches the interface signature
const add: MathOperation = (x, y) => {
  return x + y;
};

console.log(add(5, 3));

// Parent interface
interface Animal {
  name: string;
}

// Child interface
interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  breed: "German Shepherd",
};

// Generics let you write reusable code that works with different types.
// T is a generic type placeholder
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// TypeScript automatically understands the type
const num = getFirst([1, 2, 3]);
const str = getFirst(["a", "b", "c"]);

console.log(num); // number
console.log(str); // string

// Generic function for any type
function printValue<T>(value: T): void {
  console.log(value);
}

printValue<string>("Hello");
printValue<number>(100);
printValue<boolean>(true);

// Generic class for storing data
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

// Number box
const numberBox = new Box<number>(123);

// String box
const stringBox = new Box<string>("Hello");

console.log(numberBox.getContent());
console.log(stringBox.getContent());
