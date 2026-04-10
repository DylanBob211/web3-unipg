import { Observable } from './observable.js';
import { renderTodos } from './view.js';

const todosStorageKey = 'todos';
const initialTodos = await init();
export const todos = new Observable([]);

function getTodosFromLocalStorage() {
  const raw = localStorage.getItem(todosStorageKey);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function init() {
  const todos = getTodosFromLocalStorage();
  if (todos.length === 0) return fetchTodos();
  else return todos;
}

todos.subscribe((value) => {
  console.log(value);
  saveTodosToLocalStorage();
  renderTodos(value);
});

todos.next(initialTodos);

async function fetchTodos() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5',
  );
  const todos = await response.json();
  return todos;
}

function saveTodosToLocalStorage() {
  localStorage.setItem(todosStorageKey, JSON.stringify(todos.value));
}
