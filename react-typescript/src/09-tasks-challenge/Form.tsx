import { useState } from "react";
import { type Task } from "./types";

type FormProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function Form({ setTasks }: FormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      description: input,
      isComplete: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flex: 1,
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          outline: "none",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 14px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#4f46e5",
          color: "white",
          cursor: "pointer",
        }}>
        Add
      </button>
    </form>
  );
}
