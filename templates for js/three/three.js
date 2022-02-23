//var
let input = document.querySelector("#text");
let submit = document.querySelector("#sub");
let tasksDiv = document.querySelector(".taskes");
// functions
let arrayOfTasks = [];
getDataFromLocalStorage();
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
// click

function addTaskToArray(taskTEXT) {
  const task = {
    id: Date.now(),
    title: taskTEXT,
    completed: false,
  };
  arrayOfTasks.push(task);
  //   console.log(arrayOfTasks);
  //add to page
  addElementToPageFrom(arrayOfTasks);
  //  add to local storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";
  // looping
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed === true) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del";
    span.style.cssText =
      "background-color: red; padding: 7px; margin: 50;  position: absolute; top: 0; right: 0; padding: 12px;";
    span.appendChild(document.createTextNode("X"));
    div.appendChild(span);
    console.log(div);
    tasksDiv.appendChild(div);
  });
}
// add tasks

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};
function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    // console.log(tasks);
    addElementToPageFrom(tasks);
  }
}
