let todo = {
  title: "Update Stage-0 Project to be Interactive",
  desc: "  This project is a non-negotiable prerequisite for stage-1 promotion.",
  priority: "High",
  status: "Pending",
  dueDate: new Date(Date.now() + 3600000).toISOString(),
  tags: ["work", "frontend"],
  completed: false,
};

const el = (id) => document.getElementById(id);

function render() {
  el("title").textContent = todo.title;
  el("desc").textContent = todo.desc;
  el("priority").textContent = todo.priority;
  el("statusText").textContent = todo.status;
  el("statusControl").value = todo.status;
  el("checkbox").checked = todo.completed;

  document.querySelector(".todo-card").className =
    `todo-card priority-${todo.priority.toLowerCase()} ${todo.completed ? "completed" : ""}`;

  el("dueDate").textContent = new Date(todo.dueDate).toLocaleString();

  updateTime();
  renderTags();
}

function renderTags() {
  const tagEl = el("tags");
  tagEl.innerHTML = "";
  todo.tags.forEach((tag) => {
    const li = document.createElement("li");
    li.className = "tag";
    li.textContent = tag;
    tagEl.appendChild(li);
  });
}

function updateTime() {
  if (todo.status === "Done") {
    el("timeRemaining").textContent = "Completed";
    return;
  }

  const diff = new Date(todo.dueDate) - new Date();

  if (diff < 0) {
    el("overdue").textContent = "Overdue";
    el("timeRemaining").textContent =
      "Overdue by " + Math.floor(Math.abs(diff) / 3600000) + " hours";
    el("timeRemaining").classList.add("overdue");
  } else {
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) el("timeRemaining").textContent = `Due in ${days} days`;
    else if (hours > 0)
      el("timeRemaining").textContent = `Due in ${hours} hours`;
    else el("timeRemaining").textContent = `Due in ${mins} minutes`;

    el("overdue").textContent = "";
  }
}

setInterval(updateTime, 60000);

el("checkbox").onchange = () => {
  todo.completed = !todo.completed;
  todo.status = todo.completed ? "Done" : "Pending";
  render();
};

el("statusControl").onchange = (e) => {
  todo.status = e.target.value;
  todo.completed = todo.status === "Done";
  render();
};

el("editBtn").onclick = () => {
  el("viewMode").classList.add("hidden");
  el("editMode").classList.remove("hidden");

  el("editTitle").value = todo.title;
  el("editDesc").value = todo.desc;
  el("editPriority").value = todo.priority;
  el("editDue").value = todo.dueDate;
};

el("cancelBtn").onclick = () => {
  el("editMode").classList.add("hidden");
  el("viewMode").classList.remove("hidden");
};

el("saveBtn").onclick = () => {
  todo.title = el("editTitle").value;
  todo.desc = el("editDesc").value;
  todo.priority = el("editPriority").value;
  todo.dueDate = el("editDue").value;

  el("editMode").classList.add("hidden");
  el("viewMode").classList.remove("hidden");

  render();
};

el("test-todo-expand-toggle")?.addEventListener("click", () => {
  const section = el("collapsible");
  const expanded = section.classList.toggle("hidden");
  event.target.setAttribute("aria-expanded", !expanded);
});

render();
