// Array syntax: type[] or Array<type>
const flavours: string[] = ["pineapple", "apple", "mango"];
console.log("String array:", flavours);

// Number array
const prices: number[] = [12, 33, 456];
console.log("Number array:", prices);

// Generic array syntax
const rating: Array<number> = [4.5, 5.0];
console.log("Rating array:", rating);

// Array of objects with type definition
type Arr = {
  name: string;
  price: number;
};

const menu: Arr[] = [
  {
    name: "Arr1",
    price: 20,
  },
  {
    name: "Arr3",
    price: 25,
  },
];
console.log("Menu array:", menu);

// Array inside array example
const nestedArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Nested number array:", nestedArr);

// Tuples: A tuple is a typed array with a pre-defined length and types for each index.
// Example:
const tuple: [string, number] = ["hello", 42];
console.log("Tuple:", tuple);

// Readonly tuple: prevents modification of elements once assigned.
const readonlyTuple: readonly [string, number] = ["world", 99];
console.log("Readonly tuple:", readonlyTuple);
// readonlyTuple[0] = "changed"; // Error: cannot assign to '0' because it is a read-only property.

// Named tuple example
type Person = [name: string, age: number];
const person: Person = ["Alice", 30];
console.log("Named tuple:", person);

// Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log("Enum Direction:", Direction.Up, Direction[Direction.Up]);

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

console.log("String enum Status:", Status.Active);
