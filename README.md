간단한 ToDo-List 만들기

12.06~12.14

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?
style=flat&logo=JavaScript&logoColor=white"/>


```
// DOMContentLoaded 이벤트가 발생하면 실행됩니다.
document.addEventListener("DOMContentLoaded", () => {
   // 추가 버튼과 삭제 버튼을 가져옵니다.
  let addTaskBtn = document.getElementById("add-task-btn")
  let deleteTaskBtn = document.getElementById("delete-task-btn")
  // 추가 버튼 클릭 이벤트에 addTask 함수를 연결합니다.
  addTaskBtn.addEventListener("click", addTask)
  // 삭제 버튼 클릭 이벤트에 deleteSelectedTasks 함수를 연결합니다.
  deleteTaskBtn.addEventListener("click", deleteSelectedTasks)

  // 투두를 추가하는 함수
  function addTask() {
    // 입력 필드와 입력된 텍스트를 가져옵니다.
    let taskInput = document.getElementById("add-task-input")
    let taskText = taskInput.value.trim()
    // 텍스트가 비어있지 않으면 실행합니다.
    if (taskText !== "") {
      // 투두 리스트 컨테이너를 가져옵니다.
      let todoList = document.getElementById("todo-list")
      // 새로운 리스트 아이템을 생성합니다.
      let li = document.createElement("li")
      li.className = "todo-item"
      li.innerHTML = '<input type="checkbox"> <span>' + taskText + '</span>'
      // 리스트에 아이템을 추가합니다.
      todoList.appendChild(li)

      // 입력 필드를 초기화합니다.
      taskInput.value = ""
    }
  }

  // 선택한 투두를 삭제하는 함수
  function deleteSelectedTasks() {
    // 투두 리스트 컨테이너와 선택된 체크박스들을 가져옵니다.
    let todoList = document.getElementById("todo-list")
    let checkboxes = todoList.querySelectorAll('input[type="checkbox"]:checked')

    // 각 체크박스에 대해 반복문을 실행합니다.
    checkboxes.forEach(function (checkbox) {
      // 체크박스의 부모인 리스트 아이템을 가져옵니다.
      let listItem = checkbox.parentNode
      // 리스트 아이템을 삭제합니다.
      listItem.parentNode.removeChild(listItem)
    })
  }
})
```