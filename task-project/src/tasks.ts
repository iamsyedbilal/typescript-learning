const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskList = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTask();

function loadTask(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", function (event: SubmitEvent) {
  event.preventDefault();

  const taskDescription = formInput?.value.trim();

  if (taskDescription) {
    const newTask: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(newTask);
    renderTask(newTask);
    updateStorage();
    if (formInput) {
      formInput.value = "";
    }
  } else {
    alert("Please enter a task description.");
  }
});

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  const listItem = document.createElement("li");
  listItem.textContent = task.description;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.isCompleted;

  checkbox.addEventListener("change", function () {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskList?.appendChild(checkbox);
  taskList?.appendChild(listItem);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

tasks.forEach(renderTask);
