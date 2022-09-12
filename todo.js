//GETTING EVERYTHING I NEED FROM THE HTML
const input = document.querySelector('#input');
const add = document.querySelector('#add');
const holder = document.querySelector('.task-holder');
const form = document.querySelector('#form');


//Keeping count of the tasks
const count = document.querySelector('#task-count');
const show = document.querySelector('#task-show');

let numberTask = 6;
count.textContent = numberTask;

show.textContent = 'tasks to add';

const addTask = ()=>{

    //CHECKING FOR EMPTY TASKS
    if(input.value === ''){
        alert('You must add a task')
        return;
    }

    //MAKING SURE ONLY 6 TASKS ARE ON THE LIST
    if(numberTask <= 0){
        alert('Maximum tasks reached');
        return;
    }

    numberTask = numberTask - 1;
    count.textContent = numberTask;

    //Changing the tasks to singluar
    if(numberTask <= 1){
        show.textContent = 'task to add';
    }

    const task = input.value;

    //CREATING THE DIV FOR THE TASKS
    const taskBatch =document.createElement('div');
    taskBatch.setAttribute('class', 'task-batch');

    //CREATING THE TEXT FOR THE TASK
    const taskText =document.createElement('input');
    taskText.setAttribute('class', 'task-text');
    taskText.setAttribute('readonly', 'readonly');

    //GIVING THE VALUE OF THE INPUT TO THE TEXT
    taskText.value = task;

    //CREATING A DIV FOR THE BUTTONS
    const taskBtns =document.createElement('div');
    taskBtns.setAttribute('class', 'task-btns');

    //CREATING THE BUTTONS AND THE CLEAR IMAGE
    const edit = document.createElement('button');
    const done = document.createElement('button');
    const todoImage = document.createElement('img');

    //ADDING TEXT TO THE BUTTONS
    edit.textContent = 'Edit';
    done.textContent = 'Done';

    //GIVING THE IMAGE ATTRIBUTES
    todoImage.setAttribute('src', 'x.png');
    todoImage.setAttribute('alt', 'Clear List');

    //APPENDING EVERYTHING
    taskBatch.appendChild(taskText);
    taskBtns.appendChild(edit);
    taskBtns.appendChild(done);
    taskBtns.appendChild(todoImage);
    taskBatch.appendChild(taskBtns);
    holder.appendChild(taskBatch);

    //giving the todo image a function to clear task
    todoImage.addEventListener('click', ()=>{
        holder.removeChild(taskBatch);

        //ADDING TO THE REMAINING TASKS
        numberTask = numberTask + 1;
        count.textContent = numberTask;
    })

    //Giving the done button function
    done.addEventListener('click', ()=>{
        if(done.textContent === 'Done'){
            done.textContent = 'Undone';
            taskText.style.color = 'green';
            taskText.style.borderColor = 'green';
        }else{
            done.textContent = 'Done';
            taskText.style.color = 'black';
            taskText.style.borderColor = 'black';
        }
    })

    //Giving the edit button function
    edit.addEventListener('click', ()=>{
        if(edit.textContent === 'Edit'){
            edit.textContent = 'Save';
            taskText.style.color = 'red';
            taskText.style.borderColor = 'red';
            taskText.removeAttribute('readonly');
        }else{
            edit.textContent = 'Edit';
            taskText.style.color = 'black';
            taskText.style.borderColor = 'black';
            taskText.setAttribute('readonly', 'readonly');
        }
    })

    //CLEARING THE INPUT
    input.value = '';
}
