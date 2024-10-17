const form = document.querySelector('#input-form');
const input = document.querySelector('#input');
const outputList = document.querySelector('#output');

let todos = [];

const getTodos = () => {
    fetch('posts.json') 
        .then (res => res.json())
        .then (data => {
            data.forEach(todo =>{
                createTodoElement(todo);
            })
    })
    .catch(error => console.error('Error fetching todos: ', error));  
}

const createTodoElement = (todo) => {
    //Create todo list
    const listItem = document.createElement('li');
    listItem.textContent = todo.title;
    if (todo.completed) {
        listItem.classList.add('completed')
    }
    //Add a click event to clear mark
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed') // Switch class for clear marking
        
    })

    //Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    // Add eventListener for removal
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        outputList.removeChild(listItem) // Remove listItem from outputList
        todos = todos.filter(t => t.id !== todo.id)
    })

    listItem.appendChild(deleteButton) //Add button to the listItem

    outputList.appendChild(listItem)
}


form.addEventListener('submit', e => {
    e.preventDefault(); //Stopp the form from being submitted

    if(input.value === ''){
        return // If input is empty, do nothing
    } 
    
    const newTodo = {
        id: Date.now(),
        title: input.value,
        completed: false
    }
    createTodoElement(newTodo);
    todos.push(newTodo);
    
    input.value = ''; // Clear the input field
})
getTodos();
