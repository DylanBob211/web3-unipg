
const todoList = document.querySelector('#todo-list');

function createTodoItem(todo) {
  const li = document.createElement('li');

  li.innerHTML = `
    <label>
      <input type="checkbox" ${todo.completed ? "checked" : ''}>
      <span>
        ${todo.title}
      </span>
    </label>
    <button aria-label="rimuovi">-</button>
  `

  return li;
}

const initialTodo = createTodoItem({ title: 'ciao', completed: true });
todoList.append(initialTodo);