
 
let write = document.getElementById('write')
let todolist = document.getElementById('todo-list');
let addtodo = document.getElementById('addtodo')

addtodo.addEventListener('click', addTodoHandler);
write.addEventListener('keypress', function(e){
    if (e.key === "Enter"){
        addTodoHandler();
    }
});

function addTodoHandler(){
    const todotext = write.value.trim();
    if (todotext !== ''){
        const li = document.createElement('li');
        li.textContent = todotext;
        todolist.appendChild(li);
        write.value = '';
    }
}