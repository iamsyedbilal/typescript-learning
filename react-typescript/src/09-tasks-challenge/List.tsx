import { type Task } from "./types";

type ListProps = {
  tasks: Task[];
  onToggleTask: (taskId: Task["id"]) => void;
};

export default function List({ tasks, onToggleTask }: ListProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => onToggleTask(task.id)}
            />

            <span
              style={{
                textDecoration: task.isComplete ? "line-through" : "none",
                color: task.isComplete ? "#999" : "#222",
              }}>
              {task.description}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}
