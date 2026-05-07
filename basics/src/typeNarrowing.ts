// Type Narrowing
// Refining a variable's type inside a conditional block.

// Type Guard
// A function that checks and narrows a type at runtime.

// =========================
// BASIC TYPE NARROWING
// =========================

function formatValue(value: string | number) {
  if (typeof value === "string") {
    // value is narrowed to string
    console.log(value.toUpperCase());
  } else {
    // value is narrowed to number
    console.log(value.toFixed(2));
  }
}

formatValue("hello");
formatValue(42);

// =========================
// TYPE GUARD WITH CLASSES
// =========================

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function isDog(animal: Dog | Cat): animal is Dog {
  return animal instanceof Dog;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());

// =========================
// CUSTOM TYPE GUARD
// =========================

type FoodOrder = {
  item: string;
  price: number;
};

function isFoodOrder(value: unknown): value is FoodOrder {
  return (
    typeof value === "object" &&
    value !== null &&
    "item" in value &&
    "price" in value &&
    typeof value.item === "string" &&
    typeof value.price === "number"
  );
}

function serveOrder(order: FoodOrder | string) {
  if (isFoodOrder(order)) {
    return `Serving ${order.item} for $${order.price}`;
  }

  return `Serving custom order: ${order}`;
}

console.log(serveOrder({ item: "Pizza", price: 10 }));
console.log(serveOrder("Burger"));
