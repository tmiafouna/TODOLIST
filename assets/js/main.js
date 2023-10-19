function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  if (todoInput.value.trim() === "") {
    alert("Veuillez entrer une tâche!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = todoInput.value;

  // Optionnel : ajouter une fonction pour supprimer une tâche
  li.addEventListener("click", function () {
    todoList.removeChild(li);
  });
  todoList.appendChild(li);
  todoList.appendChild(li);
  todoInput.value = ""; // vider l'input
}
