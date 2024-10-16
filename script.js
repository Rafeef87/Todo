const form = document.querySelector('#input-form');
const input = document.querySelector('#input');
const outputList = document.querySelector('#output');

form.addEventListener('submit', e => {
    e.preventDefault(); //Stopp the form from being submitted

    if(input.value === ''){
        return // If input is empty, do nothing
    } 
    //Add a click event to clear mark
    const listItem = document.createElement('li');
    listItem.textContent = input.value;

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed') // Switch class for clear marking
    })

    outputList.appendChild(listItem)
    input.value = ''; // Clear the input field
})
