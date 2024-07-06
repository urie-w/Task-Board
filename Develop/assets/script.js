// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let taskId = JSON.parse(localStorage.generateTaskId('nextId'));
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
const taskCard = $('<div>').addClass('card project-card draggable my-3').attr('data-task-id', task.id);
const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
const cardBody = $('<div>').addClass('card-body');
const cardDescription = $('<p>').addClass('card-text').text(task.description);
const dueDate = $('<p>').addClass('card-text').text(task.dueDate);
const cardDeleteBtn = $('<button>').addClass('btn btn-danger delete').attr('data-id', task.id).text('Delete');
cardDeleteBtn.on('onclick', handleDeleteTask);
console.log(tasks);
if (task.dueDate && task.status !== 'completed') {
    const now = dayjs();
    const dueDate = dayjs(task.dueDate, "DD/MM/YYYY");
console.log(task);

//Change color based on due date
    if (now.isSame(dueDate, 'day')) {
        taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(dueDate)) {
        taskCard.addClass('bg-danger text-white');
        cardDeleteBtn.addClass('boarder-light');
    }
}

cardBody.append(cardDescription, dueDate, cardDeleteBtn);
taskCard.append(cardHeader, cardBody);

return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderList() {
    const todoList = $('#todo-cards');
    todoList.empty();

    doneList = $('#done-cards');
    completedList.empty();

    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();
}

// Create project card for each list
for (let task of savedTasks) {
    if (task.status === 'todo') {
        todoList.append(createTaskCard(task));
    } else if (task.status === 'in-progress') {
        inProgressList.append(createTaskCard(task));
    } else if (task.status === 'done') {
        doneList.append(createTaskCard(task));
    }  else if (task.status === 'incomplete') {
            incompleteList.append(createTaskCard(task));
        }
    }

    // Make cards draggable
    $('.draggable').draggable({
        opacity: 0.5,
        zIndex: 100,
        helper: function(e) {
            const original = $(e.target).hasClass('ui-draggable')
                ? $(e.target)
                : $(e.target).closest('.ui-draggable');
            return original.clone().css({
                width: original.outerWidth(),
            });
        },
    });



// Todo: create a function to handle adding a new task
function handleAddTask(event){
 event.preventDefault();

 const title = $('#task-title').val();
 const description = $('#task-description').val();
 const datepicker = $('#task-due-date').val();

 console.log(title, description, datepicker);

 const data = {
     title,
     description,
     dueDate: datepicker,
     status: 'to-do',
     id: newId
 };

 console.log(data);

 savedTasks.push(data);
 savedTasks=JSON.parse(localStorage.setItem("tasks", JSON.stringify(savedTasks)));
 window.location.reload();
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    event.preventDefault();
    taskId = $(this).attr('data-id');
    console.log(taskId);
    taskList= taskList.filter(task => task.id!== taskId);
localStorage.setItem("tasks", JSON.stringify(taskList));
renderList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(taskId, newLaneId) {
    const tasks = document.getElementById(taskId);
    const newLane = document.getElementById(newLaneId);
   if (tasks && newLane) {
//move task to new lane
        newLane.appendChild(tasks);
        console.log(newLane);
   }else {
       console.error('Task or lane not found');
   }
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
