type ObjType = {
  name: string;
  price: number;
  isActive: boolean;
};

const obj: ObjType = {
  name: "bilal",
  price: 20,
  isActive: true,
};

// TypeScript infers the object shape as:
// {
//   name: string,
//   price: number,
//   isActive: boolean,
// };

type Tea = {
  name: string;
  price: number;
  isHot: boolean;
};

function updateOrder(updated: Partial<Tea>) {
  console.log(`Updating Tea :${updated}`);
}

// Can also pss the empty object
updateOrder({
  price: 20,
});

type Order = {
  name?: string;
  quantity?: number;
};

// So as you make it required now all the values is required
function makeOrder(order: Required<Order>) {
  console.log(order);
}

makeOrder({
  name: "lamp",
  quantity: 1,
});

// Pick utility type
// Definition: Pick<Type, Keys> constructs a type by picking the set of properties Keys from Type.
// Example:
type PickedObj = Pick<ObjType, "name" | "price">;
// PickedObj is { name: string; price: number; }
const picked: PickedObj = {
  name: "example",
  price: 100,
};

// Omit used to remove specific properties from a type.
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Omit<User, "password">;
