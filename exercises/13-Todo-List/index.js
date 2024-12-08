// Seleccionar elementos del DOM
let addToDoInput = document.querySelector('#addToDo');
let todoList = document.querySelector('ul');

// Función para añadir una nueva tarea
function addTask() {
  const taskText = addToDoInput.value.trim();
  if (taskText === '') return;

  // Crear un nuevo elemento <li>
  const li = document.createElement('li');
  li.innerHTML = `<span><i class='fa fa-trash'></i></span> ${taskText}`;

  // Añadir un listener de eventos al ícono de la papelera para eliminar la tarea
  li.querySelector('.fa-trash').addEventListener('click', deleteTask);

  // Añadir el nuevo <li> a la lista de tareas
  todoList.appendChild(li);

  // Limpiar el campo de entrada
  addToDoInput.value = '';
}

// Función para eliminar una tarea
function deleteTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  todoList.removeChild(taskItem);
}

// Añadir un listener de eventos al campo de entrada para añadir tareas con la tecla "Enter"
addToDoInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Añadir listeners de eventos a los íconos de la papelera de las tareas iniciales
document.querySelectorAll('.fa-trash').forEach(function(trashIcon) {
  trashIcon.addEventListener('click', deleteTask);
});



