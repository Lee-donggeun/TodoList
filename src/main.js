document.addEventListener("DOMContentLoaded", () => {
  let addTaskBtn = document.getElementById("add-task-btn")
  let deleteTaskBtn = document.getElementById("delete-task-btn")

  addTaskBtn.addEventListener("click", addTask)
  deleteTaskBtn.addEventListener("click", deleteSelectedTasks)

  function addTask() {
    let taskInput = document.getElementById("add-task-input")
    let taskText = taskInput.value.trim()

    if (taskText !== "") {
      let todoList = document.getElementById("todo-list")
      let li = document.createElement("li")
      li.className = "todo-item"
      li.innerHTML = '<input type="checkbox"> <span>' + taskText + '</span>'
      todoList.appendChild(li)

      taskInput.value = ""
    }
  }

  function deleteSelectedTasks() {
    let todoList = document.getElementById("todo-list")
    let checkboxes = todoList.querySelectorAll('input[type="checkbox"]:checked')

    checkboxes.forEach(function (checkbox) {
      let listItem = checkbox.parentNode
      listItem.parentNode.removeChild(listItem)
    })
  }
})