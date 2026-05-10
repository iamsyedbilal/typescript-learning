// ---------------------------------
// 1. CLASS
// A class is a blueprint for objects
// ---------------------------------

class Person {
  // Properties (variables inside class)
  name: string;
  age: number;

  // Constructor runs when object is created
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method (function inside class)
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Creating object from class
const person1 = new Person("Ali", 22);

// Calling method
person1.greet();

// ---------------------------------
// 2. ACCESS MODIFIERS
// public, private, protected
// ---------------------------------

class BankAccount {
  // private = accessible only inside class
  private balance: number = 0;

  // public method
  deposit(amount: number) {
    this.balance += amount;
  }

  // method to see balance
  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance());

// ❌ Error
// console.log(account.balance);

// ---------------------------------
// 3. CONSTRUCTOR SHORTCUT
// TypeScript shortcut for properties
// ---------------------------------

class Car {
  // Automatically creates properties
  constructor(
    public brand: string,
    private year: number,
  ) {}
}

const car1 = new Car("Toyota", 2024);

console.log(car1.brand);

// ---------------------------------
// 4. INHERITANCE
// Child class extends parent class
// ---------------------------------

class Animal {
  move() {
    console.log("Animal is moving");
  }
}

// Dog inherits Animal
class Dog extends Animal {
  bark() {
    console.log("Woof Woof");
  }
}

const dog = new Dog();

dog.move(); // inherited method
dog.bark();

// ---------------------------------
// 5. METHOD OVERRIDING
// Child replaces parent method
// ---------------------------------

class Bird {
  sound() {
    console.log("Bird sound");
  }
}

class Parrot extends Bird {
  // overriding parent method
  sound() {
    console.log("Parrot talking");
  }
}

const parrot = new Parrot();

parrot.sound();

// ---------------------------------
// 6. ABSTRACT CLASS
// Cannot create object directly
// Used as blueprint
// ---------------------------------

abstract class Shape {
  // abstract method
  // child MUST implement it
  abstract area(): number;

  // normal method
  print() {
    console.log("Printing shape");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // implementing abstract method
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);

console.log(circle.area());

// ---------------------------------
// 7. INTERFACE
// Defines structure
// ---------------------------------

interface Flyable {
  // method signature
  fly(): void;
}

class Eagle implements Flyable {
  fly() {
    console.log("Eagle is flying");
  }
}

const eagle = new Eagle();

eagle.fly();

// ---------------------------------
// 8. ENCAPSULATION
// Protecting internal data
// ---------------------------------

class Counter {
  private count = 0;

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.getCount());

// ---------------------------------
// 9. POLYMORPHISM
// Same method, different behavior
// ---------------------------------

class Cat {
  speak() {
    console.log("Meow");
  }
}

class Cow {
  speak() {
    console.log("Moo");
  }
}

const animals = [new Cat(), new Cow()];

// Same method behaves differently
animals.forEach((animal) => animal.speak());

// ---------------------------------
// 10. STATIC MEMBERS
// Belong to class itself
// ---------------------------------

class MathUtils {
  // static property
  static PI = 3.14;

  // static method
  static square(num: number) {
    return num * num;
  }
}

// No object needed
console.log(MathUtils.PI);

console.log(MathUtils.square(4));

// ---------------------------------
// 11. GETTERS & SETTERS
// Controlled access to data
// ---------------------------------

class Employee {
  private _salary = 0;

  // getter
  get salary() {
    return this._salary;
  }

  // setter
  set salary(value: number) {
    // validation
    if (value > 0) {
      this._salary = value;
    }
  }
}

const emp = new Employee();

emp.salary = 50000;

console.log(emp.salary);

// ---------------------------------
// 12. READONLY PROPERTY
// Cannot change after initialization
// ---------------------------------

class Config {
  readonly appName = "MyApp";
}

const config = new Config();

console.log(config.appName);

// ❌ Error
// config.appName = "NewApp";
