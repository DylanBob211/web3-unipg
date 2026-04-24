import { todos } from './model';
import { querySelectorOrThrow } from './utils';
import { todoList } from './view.js';
import confetti from 'canvas-confetti';

const form = querySelectorOrThrow('#todo-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target instanceof HTMLFormElement) {
    const formData = new FormData(event.target);
    const title = formData.get('new-todo')?.toString();
    if (!title) return;
    addTodo(title);

    event.target.reset();
    confetti();
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target === null) return;
  if (event.target instanceof Element) {
    const li = event.target.closest('li');
    if (li === null) return;

    if (event.target.matches('button')) {
      removeTodoById(Number(li.id));
    }
    if (event.target.matches('input[type="checkbox"]')) {
      toggleTodoCompletionById(Number(li.id));
    }
  }
});

function addTodo(title: string) {
  const todo = { title, completed: false, id: Date.now() };
  const newTodos = [...todos.value, todo];
  todos.next(newTodos);
}

function removeTodoById(id: number) {
  const newTodos = todos.value.filter((todo) => todo.id !== id);
  todos.next(newTodos);
}

function toggleTodoCompletionById(id: number) {
  const newTodos = todos.value.map((todo) => {
    if (todo.id === id) return { ...todo, completed: !todo.completed };
    return todo;
  });
  todos.next(newTodos);
}
