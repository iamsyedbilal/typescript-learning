// Union Types - allow a variable to hold values of multiple types
let subs: number | string = 10;
subs = "hello"; // valid - can be string or number

// Literal Union Types - restrict to specific string values
let apiRequest: "pending" | "success" | "error" = "pending";
apiRequest = "success"; // valid
// apiRequest = "loading"; // error - not in union

// Any Type - allows any type of value (escape hatch, use sparingly)
let anything: any = 42;
anything = "string";
anything = true;
anything = { name: "John" };
// any disables type checking

// Union with functions
function processInput(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input.toFixed(2);
  }
}
