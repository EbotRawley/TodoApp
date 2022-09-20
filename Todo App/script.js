var list = document.querySelector(".list")
var input = document.querySelector("input")
var add = document.getElementById("add_btn")
var task = list.getElementsByClassName("task")
var message = document.querySelector("span")

// Mark task as done
list.addEventListener("click", function (e) {
    e.target.classList.toggle("done")
})

function addTask() {
    var whiteSpace = new RegExp(/^\s+$/)
    // check if input is empty and display error if it is
    message.style.display = "none"
    if (!input.value || whiteSpace.test(input.value)) {
        var input_err = document.querySelector(".input_err")
        input_err.style.display = "block"
        setTimeout(function () {
            message.style.display = "block"
            input_err.style.display = "none"
        }, 1500)
        input.value = ""
        return
    }
    else { // add task if there's an input
        // Remove dummy message
        message.style.display = "none"
        // Create a new div
        var new_task = document.createElement("div")
        // Give it the className task
        new_task.className = "task"
        // Set its content to the inputted value
        new_task.textContent = input.value
        // Add the task to the list
        list.appendChild(new_task)
        // clear the input box
        input.value = ""

        // Display task added feedback
        var task_added = document.querySelector(".task_added")
        task_added.style.display = "block"
        setTimeout(function () {
            task_added.style.display = "none"
        }, 1500)

        // Scroll to the bottom of the list each time a task is added
        list.scrollTo(0, list.scrollHeight)
    }
}

function clearList() {
    if (!task[0]) {
        // Display Empty List warning
        var list_err = document.querySelector(".list_err")
        message.style.display = "none"
        list_err.style.display = "block"
        setTimeout(function () {
            message.style.display = "block"
            list_err.style.display = "none"
        }, 1500)

        input.value = ""
        return
    }


    // Loop throught the list and delete all tasks
    while (task[0]) {
        task[0].parentNode.removeChild(task[0])
    }

    // Display List cleared feedback
    var list_cleared = document.querySelector(".list_cleared")
    message.style.display = "none"
    list_cleared.style.display = "block"
    setTimeout(function () {
        message.style.display = "block"
        list_cleared.style.display = "none"
    }, 1500)

    input.value = ""

    // Display dummy message
    message.style.display = "block"
}