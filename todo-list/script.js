//* Variables
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const todoContainer = document.getElementById("todoContainer");

//* Stores tasks
let todos = [];

//* Create a task
addBtn.addEventListener('click', () => {
    //* Push the task in the table
    todos.push(input.value);

    //* Create a new 'li' element
    const newTodo = document.createElement('p');

    //* Clear the field
    input.value = '';

    //* Create the task
    for(let i in todos){
        newTodo.innerHTML = `${todos[i]}`
    };

    //* Display the task
    todoContainer.appendChild(newTodo);

    //* Mark the task as completed
    newTodo.addEventListener('click', () => {
        newTodo.classList.add("todo-checked");

        //* Delete the task
        newTodo.addEventListener('click', () => {
            todoContainer.removeChild(newTodo);
        });
    });

});