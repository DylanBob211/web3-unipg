
const todoList = document.querySelector('#todo-list');


console.log(todoList)

function createTodoItem(name) {
  const li = document.createElement('li');

  li.innerHTML = `
    <label>
      <input type="checkbox">
    </label>
    <span>${name}</span> 
    <button aria-label="rimuovi">-</button>
  `

  return li;
}
todoList.append(createTodoItem('ciao'))
todoList.addEventListener('click', (e) => console.log(e))