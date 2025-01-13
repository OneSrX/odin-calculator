const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let firstNum = "";
let operator = "";
let secondNum = "";
let isPressed = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let a = Number(firstNum);
    let b = Number(secondNum);

    if (btn.dataset.number) {
      if (!isPressed) {
        firstNum += btn.textContent;
        display.textContent += btn.textContent;
      } else {
        secondNum += btn.textContent;
        display.textContent += btn.textContent;
      }
    } else if (btn.dataset.operand) {
      console.log("YES");
      isPressed = true;
      operator = btn.textContent;
      display.textContent += operator;
    } else if (btn.dataset.eval) {
      let results = operate(a, b, operator);
      display.textContent = results;
      isPressed = false;
      firstNum = "";
      secondNum = "";
      operator = "";
    }
  });
});

// Handles Calculations
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return b > 0 ? divide(a, b) : "ERR: DIVISION BY 0";
    default:
      return "Invalid operator";
  }
}

// Core Math Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
