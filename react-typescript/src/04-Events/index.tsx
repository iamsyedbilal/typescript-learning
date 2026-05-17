//inline function infers object type

//When you provide the exact HTML element type in the angle brackets (<>), like HTMLInputElement in your case, you're telling TypeScript exactly what kind of element the event is coming from. This helps TypeScript provide accurate suggestions and error checking based on the properties and methods that are specific to that kind of element. For example, an HTMLInputElement has properties like value and checked that other elements don't have. By specifying the exact element type, TypeScript can help you avoid mistakes and write safer code.

import { useState } from "react";

type Person = {
  name: string;
};

export default function Component() {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    // const data = Object.fromEntries(formData);
    const textValue = formData.get("text") as string;
    // const emailValue = formData.get("email") as string;

    const person: Person = { name: textValue };
  }

  return (
    <section>
      <h2>Event Examples</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <button>Submit</button>
      </form>
    </section>
  );
}
