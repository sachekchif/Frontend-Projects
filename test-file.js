const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
	const taskText = taskInput.value.trim();
	
	if (taskText !== "") {
		const li = document.createElement("li");
		const p = document.createElement("p");
		p.textContent = "Links";
		li.innerHTML = `
			<span>${taskText}</span>
			<button onclick="removeTask(this)">Remove</button>
		`;
		taskList.appendChild(li);
		taskInput.value = "";
	}
}

// Remove a task
function removeTask(button) {
	const li = button.parentElement;
	taskList.removeChild(li);
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);


taskInput.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		addTask();
	}
});
