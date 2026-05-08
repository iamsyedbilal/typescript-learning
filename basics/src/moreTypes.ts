let response: any = "42";

// No suggestion: for any we need to use a type assertion or conversion
// let numericLength: number = response.

let numericLength: number = response as number;
console.log(numericLength);

// Number("43") not work in TS

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObj = JSON.parse(bookString) as Book;

// console.log(bookObj);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "value 1";
value = [1, 2, 3];
value = 2.5;
// now problem start
value.toUpperCase();

let newValue: unknown;
newValue = "newValue 1";
newValue = [1, 2, 3];
newValue = 2.5;
// now problem start
// newValue.toUpperCase();
// Need to type guard
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// Need to check error type
try {
} catch (error) {
  if (error instanceof Error) console.log(error.message);
  console.log("Error ", error);
}

const data: unknown = "Udemy";
const strData: string = data as string;

// Never
type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to the admin");
    return;
  }
  if (role === "user") {
    console.log("redirecting to the user");
    return;
  }
  // it will be never as we handle all edage cases
  role;
}
