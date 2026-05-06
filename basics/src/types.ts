// Type Annotations and Inference in TypeScript

// In TypeScript, you can explicitly declare the type of a variable
// or let the compiler infer it from the assigned value.

// Explicit annotation
const name: string = "Alice";
const age: number = 30;
const isActive: boolean = true;

// Inference
const greeting = `Hello, ${name}`; // inferred as string
const score = 95; // inferred as number

// Function return type annotation and parameter types
function add(x: number, y: number): number {
  return x + y;
}

const total = add(age, score);
