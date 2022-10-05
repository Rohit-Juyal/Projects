window.addEventListener("load", () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const list_el = document.getElementById("tasks");


    function addnote(task) {
        
        
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        task_content_el = document.createElement("div");
        task_content_el.classList.add("content");


        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;

        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");


        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit"

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = `<i class="fa-solid fa-trash"></i>`

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        
        let index = -1

        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerHTML == "Edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_input_el.style.outline ="1px solid rgb(70, 13, 117)"
                task_edit_el.innerHTML = "Save";
                index = savedTasks.indexOf(task_input_el.value);

            }
            else {

                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "Edit";
                task_input_el.style.outline ="none";
                savedTasks[index] = task_input_el.value;

                localStorage.setItem("tasks", JSON.stringify(savedTasks));


            }
        })

        task_delete_el.addEventListener("click", () => {
            list_el.removeChild(task_el);
            savedTasks = savedTasks.filter((e) => e !== task)

            localStorage.setItem("tasks", JSON.stringify(savedTasks))
        });

    } 

    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(addnote);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let task = input.value;
        if (task === "") {
            alert("Please write something to do")
        } else {
            savedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
            input.value = "";
            addnote(task);
        }
    });


    


});







        

        

        



