// typescript infers primitive types
// by default [] is type never
import { useState } from "react";

export default function Component() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h2>hello from typescript</h2>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        click me
      </button>
    </div>
  );
}
