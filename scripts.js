const ToDoList = function() {
    let input = document.querySelector('input[name="task"]'),
        list = document.querySelector('.todolist-tasks'); 

    this.createList = function () {
        input.addEventListener('keydown', function(event) {
            if (event.code == 'Enter' && input.value != '') {
                let checkboxTask = document.createElement('div');
                checkboxTask.classList.add('checkbox-task');
                checkboxTask.innerHTML = `
                <input type="checkbox" name="task" id="item">`;
                list.appendChild(checkboxTask);
                
                let taskName = document.createElement('div');
                taskName.classList.add('task-name');
                taskName.innerHTML = event.target.value;                             
                checkboxTask.appendChild(taskName);
                input.value = '';
                
                checkboxTask.addEventListener ('click', function(event) {
                    const checkedInput = this.querySelector('input[name="task"]');

                    if (event.target.name != 'task') checkedInput.checked = checkedInput.checked ? false : true;

                    taskName.classList.toggle('crossed');
                });
            };
        });
    };  
};


/*Наследование и доработка списка задач*/

let ToDoListNew = function() {
    ToDoList.apply(this);

    let list = document.querySelector('.todolist-tasks'),
        deleteTask = document.querySelector('.delete');

    let parentCreateList = this.createList;

    this.createList = function () {
        parentCreateList.call(this);
 
        deleteTask.addEventListener('click', function() {
            list.innerHTML = '';
        });

        //alert('Are you ready?');
    };
};

let toDoListNew = new ToDoListNew();
toDoListNew.createList();