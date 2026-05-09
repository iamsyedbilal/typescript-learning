// Function examples in TypeScript

// 1. Named function with parameter types and return type
function add(x: number, y: number): number {
  return x + y;
}

const sum = add(3, 5); // 8

// 2. Arrow function with explicit return type
const multiply = (a: number, b: number): number => {
  return a * b;
};

const product = multiply(4, 6); // 24

// 3. Optional and default parameters
function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

function welcome(message: string, times: number = 1): string {
  return `${message} `.repeat(times).trim();
}

const greeting1 = greet("Alice");
const greeting2 = greet("Alice", "Dr.");
const repeated = welcome("Welcome", 3);

// 4. Rest parameters
function joinWords(separator: string, ...words: string[]): string {
  return words.join(separator);
}

const sentence = joinWords(" ", "TypeScript", "functions", "are", "useful.");

// 5. Function type alias and callback example
type StringFormatter = (input: string) => string;

const shout: StringFormatter = (text) => text.toUpperCase();

function formatAndPrint(value: string, formatter: StringFormatter): string {
  return formatter(value);
}

const result = formatAndPrint("hello", shout); // HELLO

// 6. Function overloads
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

const combinedNumbers = combine(1, 2); // 3
const combinedStrings = combine("foo", "bar"); // foobar

// Void means function is not returning anything
function logger(): void {
  console.log("Logger");
}

logger();
