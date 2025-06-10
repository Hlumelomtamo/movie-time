document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    //Delete movies
    list.addEventListener('click',(e)=> {
        if(e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

// Add a movie
const addForm = document.forms['add-movie'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
//Creating elements
const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const movieName = document.createElement('span');
const deleteBtn = document.createElement('span');
//Add text content
movieName.textContent = value;
deleteBtn.textContent = 'delete';
//Add classes
movieName.classList.add('name');
deleteBtn.classList.add('delete');
//Append to DOM
li.appendChild(movieName);
li.appendChild(deleteBtn);  
list.appendChild(li);
});
});