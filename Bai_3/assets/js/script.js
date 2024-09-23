// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Load todos from Local Storage or initialize an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render the list of todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="Input-radio">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleComplete(${index})">
                <label>${todo.task}</label>
            </div>
            <div class="button-edit">
                <button onclick="editTodo(${index})"><i class="fa-solid fa-pencil"></i></button>
            </div>
            <div class="button-delete">
                <button onclick="deleteTodo(${index})">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}


function addTodo() {
    const task = todoInput.value.trim();
    if (task) {
        todos.push({ task, completed: false });
        saveTodos();
        renderTodos();
        todoInput.value = ''; 
    }
}


function editTodo(index) {
    const updatedTask = prompt("Edit your task:", todos[index].task);
    if (updatedTask !== null && updatedTask.trim() !== '') {
        todos[index].task = updatedTask;
        saveTodos();
        renderTodos();
    }
}


function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}


function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


addButton.addEventListener('click', addTodo);
document.addEventListener('DOMContentLoaded', renderTodos);


todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
