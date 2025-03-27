document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.createElement("button");
  themeToggle.textContent = "Toggle Dark Mode";
  themeToggle.style.position = "fixed";
  themeToggle.style.top = "10px";
  themeToggle.style.right = "10px";
  themeToggle.style.padding = "10px";
  themeToggle.style.background = "#0073e6";
  themeToggle.style.color = "white";
  themeToggle.style.border = "none";
  themeToggle.style.cursor = "pointer";
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
