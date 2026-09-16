const newButton = document.getElementById("new-button");
const ftList = document.getElementById("ft_list");

function saveTasks() {
    const tasks = [];

    ftList.querySelectorAll("div").forEach(function (task) {
        tasks.push(task.textContent);
    });

    document.cookie =
        "tasks=" + encodeURIComponent(JSON.stringify(tasks)) +
        "; max-age=31536000; path=/";
}

function createTask(text, save = true) {
    const task = document.createElement("div");
    task.textContent = text;

    task.addEventListener("click", function () {
        const shouldDelete = confirm("Do you want to remove this task?");

        if (shouldDelete) {
            task.remove();
            saveTasks();
        }
    });

    ftList.prepend(task);

    if (save) {
        saveTasks();
    }
}

function loadTasks() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "tasks") {
            try {
                const tasks = JSON.parse(
                    decodeURIComponent(parts.slice(1).join("="))
                );

                for (let index = tasks.length - 1; index >= 0; index--) {
                    createTask(tasks[index], false);
                }
            } catch (error) {
                console.log("Could not load saved tasks.");
            }
        }
    }
}

newButton.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTask(text.trim());
    }
});

loadTasks();
