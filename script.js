//const { event } = require("cypress/types/jquery");

const taskForm = document.getElementById("task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

console.log(taskForm);
console.log(taskList);


//taskForm.addEventListener("submit", addTask);


f





function addTask(){

  //Get task input value
  const task = taskInput.value

  //create new li element 
  const li = document.createElement("li")

  //create delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = "delete"

  //add task text to li element
  li.innerText = task

  //append delete button to li element
  li.appendChild(deleteBtn)

  //append li element to task list
  taskList.appendChild(li)

  e.preventDefault();
  addTask(taskInput.value)

  taskInput.value = ""

  //preventing submission of empty input
  function empty()
  {
    const x = taskInput.value;
    x = document.getElementById("taskInput").value;
    if (x == "") 
     { 
        alert("Enter a Valid task");
     };
  }

};



//creating delete function

function deleteTask(e){
  //check if delete button was clicked
  if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove()
  }
};


taskForm.addEventListener("submit", addTask);


//taskForm.addEventListener("submit", addTask);



