let addTodoButton = document.querySelector(".addTodo");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector(".inputField");

addTodoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  toDoContainer.appendChild(paragraph);
});
