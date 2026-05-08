type Tea = { type: string; sugar: number; strong: boolean };

// Reuse the Tea type for both functions instead of repeating the object signature.
function makeTea(order: Tea) {
  console.log("Making tea:", order);
}

function serveTea(order: Tea) {
  console.log("Serving tea:", order);
}

// Example usage of the functions with a Tea order.
const teaOrder: Tea = {
  type: "Earl Grey",
  sugar: 1,
  strong: false,
};

makeTea(teaOrder);
serveTea(teaOrder);

// As type we also have interface.
// Interfaces are often preferred for classes because they describe object shapes.
interface TeaRecipe {
  water: number;
  milk: number;
}

class TeaClass implements TeaRecipe {
  water = 500;
  milk = 50;
}

const recipe = new TeaClass();
console.log(`Tea recipe: ${recipe.water}ml water, ${recipe.milk}ml milk`);

// Interface for a union literal property.
interface CupSize {
  size: "small" | "large";
}

class TeaCup implements CupSize {
  size: "small" | "large" = "large";
}

const cup = new TeaCup();
console.log(`Cup size: ${cup.size}`);
