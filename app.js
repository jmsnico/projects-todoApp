//Array of tasks
const taskList = ['Coding', 'Design', 'Programming'];

const form = document.querySelector('#task-form');
const tasks = document.querySelector('#tasks');
const errorMsg = document.querySelector('#error-msg');
const editBtn = document.querySelectorAll('.edit')
const deleteBtn = document.querySelectorAll('.delete')

for (let task of taskList) {
    addTask(task)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = form.elements.task;
    // taskList.push(newTask.value);
    // for (let task of taskList) {
    //     console.log(task)
    // }

    addTask(newTask.value);
    newTask.value = '';



});
function addTask(task) {
    if (task) {
        //TASK LIST WRAPPER


        const newTask = document.createElement('div');
        newTask.classList.add('task');

        //INDIVIDUAL TASK TEXT
        const taskInput = document.createElement('input');
        taskInput.classList.add('text');
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");


        //INDIVIDUAL ACTION BUTTONS
        const actionDiv = document.createElement('div');
        actionDiv.classList.add('actions');

        //ACTION EDIT BUTTON
        const actionEdit = document.createElement('button');
        actionEdit.classList.add('edit');
        const iconEdit = document.createElement('i');
        iconEdit.classList.add('fa-regular', 'fa-pen-to-square');
        actionEdit.appendChild(iconEdit)


        //ACTION DELETE BUTTON
        const actionDelete = document.createElement('button');
        const iconDelete = document.createElement('i');
        actionDelete.classList.add('delete');
        iconDelete.classList.add('fa-regular', 'fa-trash-can');
        actionDelete.appendChild(iconDelete)
        //Icon for saving the Edit Button
        const iconSave = document.createElement('i');
        iconSave.classList.add('fa-solid', 'fa-check');
        //APPENDING ALL CONTENTS
        newTask.append(taskInput);
        actionDiv.appendChild(actionEdit);
        actionDiv.appendChild(actionDelete);
        newTask.appendChild(actionDiv);
        tasks.appendChild(newTask);


        actionEdit.addEventListener('click', (e) => {
            if (iconEdit.className === "fa-regular fa-pen-to-square") {
                taskInput.removeAttribute('readonly');
                taskInput.focus();
                iconEdit.classList.replace('fa-regular', 'fa-solid');
                iconEdit.classList.replace('fa-pen-to-square', 'fa-check');

            } else {
                taskInput.setAttribute('readonly', 'readonly');
                iconEdit.classList.replace('fa-solid', 'fa-regular');
                iconEdit.classList.replace('fa-check', 'fa-pen-to-square');
            }


            //actionEdit.appendChild(iconSave)
        })
        actionDelete.addEventListener('click', (e) => {
            tasks.removeChild(newTask);
        });

    }
}
// for (let btn of deleteBtn) {
//     btn.addEventListener('click', (e) => {
//         // e.target.remove()
//         e.target.parentElement.parentElement.parentElement.remove();
//     })
// }
// for (let btn of editBtn) {
//     btn.addEventListener('click', (e) => {
//         const input = btn.parentElement.parentElement.children[0];
//         const edit = btn.lastElementChild;
//         if (edit.className === 'fa-regular fa-pen-to-square') {
//             input.removeAttribute('readonly');

//             edit.classList.replace('fa-regular', 'fa-solid');
//             edit.classList.replace('fa-pen-to-square', 'fa-check');
//         } else {
//             sibling.setAttribute('readonly', 'readonly');
//             edit.classList.replace('fa-solid', 'fa-regular');
//             edit.classList.replace('fa-check', 'fa-pen-to-square');
//         }


//     })
// }



// for (let edit of editBtn) {
//     edit.addEventListener('click', (e) => {
//         const icon = document.querySelector('.fa-pen-to-square');
//         const input = document.querySelector('.text');
//         console.log(e)

//         // if (icon.className === "fa-regular fa-pen-to-square") {
//         //     input.removeAttribute('readonly');
//         //     icon.classList.replace('fa-regular', 'fa-solid');
//         //     icon.classList.replace('fa-pen-to-square', 'fa-check');
//         //     console.log('Success!');
//         // }
//     })
// }


