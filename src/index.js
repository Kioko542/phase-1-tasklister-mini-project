  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputField = document.getElementById("new-task-description");
        const taskDescription = inputField.value.trim();

        if (taskDescription === "") {
            alert("Please enter a task description.");
            return;
        }

        const prioritySelect = document.getElementById("priority");
        const selectedPriority = prioritySelect.value;

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.innerHTML = '<i class="fas fa-edit edit-icon"></i>';
        editButton.addEventListener("click", () => {
            // Get the task text and priority
            const taskText = listItem.querySelector(".task-text");
            const taskPriority = listItem.classList[1].split("-")[0]; // Extract priority from class

            // Show a prompt to edit the task description
            const updatedTaskDescription = prompt("Edit task:", taskText.textContent);

            if (updatedTaskDescription !== null) {
                // Update the task description
                taskText.textContent = updatedTaskDescription;

                // If needed, you can also update the priority class
                listItem.classList.replace(taskPriority + "-priority", selectedPriority + "-priority");
            }
        });

        const listItem = document.createElement("li");
        listItem.className = `item1 ${selectedPriority}-priority`; // Add priority class
        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = taskDescription;
        
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.innerHTML = '<i class="fas fa-trash-alt remove-icon"></i>';
        removeButton.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        inputField.value = "";
    });
});
