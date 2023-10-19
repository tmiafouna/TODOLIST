function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  if (todoInput.value.trim() === "") {
    alert("Veuillez entrer une tâche!");
    return;
  }
  const todoText = todoInput.value;
  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;
    // Ajouter le bouton de modification
    const editBtn = document.createElement("button");
    editBtn.classList = 'edit';
    editBtn.innerText = "Modifier";
    editBtn.onclick = function () {
      editTodo(todoEl);
    };
    todoEl.appendChild(editBtn);
    todoList.appendChild(todoEl);
    todoInput.value = "";
  }
}
function editTodo(todoEl) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = todoEl.innerText;
  // Remplace le texte de la tâche par l'input
  todoEl.innerHTML = "";
  todoEl.appendChild(input);
  input.focus();
  // Une fois la tâche modifiée (après appui sur "Entrée" ou clic en dehors)
  input.onblur = finishEditing;
  input.onkeydown = function(e) {
      if (e.key === "Enter") {
          finishEditing.call(input); // Utilisez "call" pour définir "this" à l'intérieur de finishEditing
      }
  };
  function finishEditing() {
      const newText = this.value;
      todoEl.innerHTML = newText;
      // Ajouter à nouveau le bouton de modification
      const editBtn = document.createElement("button");
      editBtn.innerText = "Modifier";
      editBtn.classList = 'edit';
      editBtn.onclick = function() {
          editTodo(todoEl);
      };
      todoEl.appendChild(editBtn);
  }
}