function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
  else {
    document.body.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
    else {
      document.body.classList.remove("dark");
    }
});
