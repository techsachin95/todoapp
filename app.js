const button = document.querySelector("button");
const form_input = document.querySelector("#form_input");
const task = document.querySelector(".task");
button.addEventListener("click", (e) => {
    e.preventDefault();
    const data = form_input.value;
    if (!data) {
        window.alert("please fill the task");
        return;
    }

    const content_div = document.createElement('div');
    content_div.classList.add('content');
    const task_input = document.createElement('input');
    task_input.classList.add('task_input')
    task_input.value = data;
    task_input.setAttribute("readonly", "readonly");
    task_input.type = 'text';
    task_input.style.backgroundColor = "#c8d6e5"
    content_div.appendChild(task_input);
    task.appendChild(content_div);
    if(form_input.value=null){
        task.removeChild(content_div);
    }

    const task_edit = document.createElement('button');
    task_edit.classList.add('task_edit');
    task_edit.innerHTML = "Edit";
    content_div.appendChild(task_edit);

    const task_delete = document.createElement('button');
    task_delete.classList.add('task_delete');
    task_delete.innerHTML = "Delete";
    content_div.appendChild(task_delete);

    task_edit.addEventListener("click", () => {
        if(task_edit.innerHTML=='Edit'){
            task_input.removeAttribute('readonly');
            task_input.style.backgroundColor = "white"
            task_input.focus();
            task_edit.innerHTML = "Save";
        }else{
            task_input.setAttribute('readonly','readonly');
            task_edit.innerHTML = "Edit";
            task_input.style.backgroundColor = "#c8d6e5";
        }
    })
    form_input.value = " ";
    task_delete.addEventListener("click", () => {
        task.removeChild(content_div);
    });
});