// Get elements
const dueDateEl = document.getElementById("due-date");
const timeRemainingEl = document.getElementById("time-remaining");
const checkbox = document.getElementById("complete-toggle");
const statusEl = document.getElementById("status");
const card = document.querySelector(".todo-card");
const edit = document.getElementById("edit-btn");
const clear = document.getElementById("delete-btn");

// Set due date
const dueDate = new Date("2026-04-20T18:00:00");

// Format due date nicely
function formatDueDate(date) {
  return (
    "Due " +
    date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  );
}

// Calculate time remaining
function updateTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diff > 0) {
    if (days > 0) {
      timeRemainingEl.textContent = `Due in ${days} day(s)`;
    } else if (hours > 0) {
      timeRemainingEl.textContent = `Due in ${hours} hour(s)`;
    } else {
      timeRemainingEl.textContent = `Due in ${minutes} minute(s)`;
    }
  } else {
    const overdueHours = Math.abs(hours);
    timeRemainingEl.textContent = `Overdue by ${overdueHours} hour(s)`;
    timeRemainingEl.style.color = "red";
  }
}

// Initial render
dueDateEl.textContent = formatDueDate(dueDate);
updateTimeRemaining();

// Update every 60 seconds
setInterval(updateTimeRemaining, 60000);

// Checkbox logic
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    statusEl.textContent = "Completed";
    card.classList.add("completed");
  } else {
    statusEl.textContent = "Pending";
    card.classList.remove("completed");
  }
});

// Acion
edit.addEventListener("click", () => {
  console.log("edit clicked");
});

clear.addEventListener("click", () => {
  console.log("delete clicked");
});
