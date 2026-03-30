
export const todoList = document.querySelector('#todo-list');

export function renderTodos(todos) {
  todoList.innerHTML = '';

  const todoListItems = todos.map(createTodoListItem);
  todoList.append(...todoListItems);
}



function createTodoListItem(todo) {
  const li = document.createElement('li');
  li.id = todo.id;
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
