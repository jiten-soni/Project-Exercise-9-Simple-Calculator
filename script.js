const toggleBtn = document.getElementById("darkModeToggle");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display-area");
const buttons = document.querySelectorAll(".btn");

let expression = "";

toggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark-mode");
  toggleBtn.textContent = calculator.classList.contains("dark-mode") ? "☀️" : "🌙";
});


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.key;

    if (key === "clear") {
      expression = "";
    } else if (key === "delete") {
      expression = expression.slice(0, -1);
    } else if (key === "=") {
      try {
        let formattedExp = expression.replace(/x/g, "*");
        expression = eval(formattedExp).toString();
      } catch {
        expression = "Error";
      }
    } else {
      expression += key;
    }

    display.value = expression;
  });
});
