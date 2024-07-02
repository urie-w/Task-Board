// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateId() {
    let taskId = JSON.parse(localStorage.generateId('newId'));
}


//Add task aka show modal pop up
const dialog = document.getElementById("add-task");

function showTaskDialog() {
    dialog.showModal()
}

// Function to close modal
function closeTaskDialog() {
    dialog.closest()
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const taskCard = $('<div>').addClass('card project-card draggable my-2').attr('data-id', task.id);
const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
const cardBody = $('<div>').addClass('card-body');
const cardDescription = $('<p>').addClass('card-text').text(task.description);
const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
const cardDeleteBtn = $('<button>').addClass('btn btn-danger btn-sm float-right').attr('data-id', task.id).text('Delete');

if (task.dueDate && task.status !== 'complete') {
    const now = dayjs();
    const dueDate = dayjs(task.dueDate, "DD/MM/YYYY");

    if (now.isSame(dueDate, 'day')) {
        taskCard.addClass('text-success');
    } else if (now.isAfter(dueDate)) {
        taskCard.addClass('text-danger');
        cardDeleteBtn.addClass('boarder-light');
    }
}

cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
taskCard.append(cardHeader, cardBody);

return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderList() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const todoList = $('#todo-cards');
    todoList.empty();

    const completedList = $('#completed-cards');
    completedList.empty();

    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();

    const incompleteList = $('#incomplete-cards');
    incompleteList.empty();
}

// Create project card for each list
for (let task of savedTasks) {
    if (task.status === 'todo') {
        todoList.append(createTaskCard(task));
    } else if (task.status === 'in-progress') {
        inProgressList.append(createTaskCard(task));
    } else if (task.status === 'complete') {
        completedList.append(createTaskCard(task));
    }  else if (task.status === 'incomplete') {
            incompleteList.append(createTaskCard(task));
        }
    }


// Todo: create a function to handle adding a new task
function handleAddTask(event){
 event.preventDefault();

 const title = $('#task-title').val();
 const description = $('#task-description').val();
 const datepicker = $('#task-due-date').val();

 const data = {
     title,
     description,
     dueDate: datepicker,
     status: 'incomplete',
     id: newId
 };

 const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
 savedTasks.push(data);

 localStorage.setItem("tasks", JSON.stringify(savedTasks));

 window.location.reload();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
