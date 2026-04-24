import type { Todo } from './types';
import { querySelectorOrThrow } from './utils';

export const todoList = querySelectorOrThrow('#todo-list');

export function renderTodos(todos: Todo[]) {
  todoList.innerHTML = '';

  const todoListItems = todos.map(createTodoListItem);
  todoList.append(...todoListItems);
}

function createTodoListItem(todo: Todo) {
  const li = document.createElement('li');

  li.id = todo.id.toString();
  li.innerHTML = `
    <label>
      <input type="checkbox" ${todo.completed ? 'checked' : ''}>
      <span>
        ${todo.title}
      </span>
    </label>
    <button aria-label="rimuovi">-</button>
  `;

  return li;
}
