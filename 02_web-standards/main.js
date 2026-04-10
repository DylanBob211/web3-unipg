import { todos } from './model.js';
import { todoList } from './view.js';
import confetti from 'canvas-confetti';

const form = document.querySelector('#todo-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('new-todo');
  if (!title) return;
  addTodo(title);
  form.reset();
  confetti();
});

todoList.addEventListener('click', (event) => {
  const li = event.target.closest('li');

  if (event.target.matches('button')) {
    removeTodoById(Number(li.id));
  }
  if (event.target.matches('input[type="checkbox"]')) {
    toggleTodoCompletionById(Number(li.id));
  }
});

function addTodo(title) {
  const todo = { title, completed: false, id: Date.now() };
  const newTodos = [...todos.value, todo];
  todos.next(newTodos);
}

function removeTodoById(id) {
  const newTodos = todos.value.filter((todo) => todo.id !== id);
  todos.next(newTodos);
}

function toggleTodoCompletionById(id) {
  const newTodos = todos.value.map((todo) => {
    if (todo.id === id) return { ...todo, completed: !todo.completed };
    return todo;
  });
  todos.next(newTodos);
}
