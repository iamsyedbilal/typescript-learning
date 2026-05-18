import { useState } from "react";
import Form from "./Form";
import List from "./List";
import { type Task } from "./types";

export default function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onToggleTask(taskId: Task["id"]) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task,
      ),
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f7fb",
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px",
        fontFamily: "Arial, sans-serif",
      }}>
      <div
        style={{
          width: "420px",
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}>
        <Form setTasks={setTasks} />
        <List tasks={tasks} onToggleTask={onToggleTask} />
      </div>
    </main>
  );
}
