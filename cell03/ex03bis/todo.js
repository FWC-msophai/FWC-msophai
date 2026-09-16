$(document).ready(function () {
    function saveTasks() {
        const tasks = [];

        $("#ft_list div").each(function () {
            tasks.push($(this).text());
        });

        document.cookie =
            "tasks=" + encodeURIComponent(JSON.stringify(tasks)) +
            "; max-age=31536000; path=/";
    }

    function createTask(text, save) {
        const task = $("<div></div>").text(text);

        task.click(function () {
            if (confirm("Do you want to remove this task?")) {
                $(this).remove();
                saveTasks();
            }
        });

        $("#ft_list").prepend(task);

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

    $("#new-button").click(function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            createTask(text.trim(), true);
        }
    });

    loadTasks();
});
