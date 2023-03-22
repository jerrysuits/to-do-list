const taskForm = document.getElementById("task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Load tasks when the page is loaded or refreshed
loadTasks();

taskForm.addEventListener("submit", addTask);

function addTask(e) {
  // Prevent form submission
  e.preventDefault();

  // Get task input value
  const task = taskInput.value.trim();

  // If task is empty, display an alert message and return
  if (!task) {
    alert("Please enter a task");
    return;
  }

  // Create new li element
  const li = document.createElement("li");

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";

  // Add task text to li element
  li.innerText = task;

  // Append delete button to li element
  li.appendChild(deleteBtn);

  // Append li element to task list
  taskList.appendChild(li);

  // Save task to local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ task, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Clear input value
  taskInput.value = "";
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task.task;

    if (task.completed) {
      li.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    deleteBtn.addEventListener("click", () => {
      console.log("Delete button clicked");
      li.remove();

      // Remove task from local storage
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const index = tasks.findIndex((t) => t.task === task.task);
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      // Update task list
      loadTasks();
    });
  });
}




