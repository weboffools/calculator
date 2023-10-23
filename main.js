
let currentTotal = 0;
let num = 0;
let operator = '';

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

function updateDisplay(num) {

  const displayArea = document.querySelector('#display');
  const content = document.createElement('span');
  content.setAttribute('id', 'display-number');

  if (displayArea.firstElementChild) {
  if (displayArea.firstElementChild.textContent === '0') {
    displayArea.replaceChildren();
    content.textContent = num;
  } else {
    let currentNum = displayArea.firstElementChild.textContent;
    let newNum = `${currentNum}${num}`;
    content.textContent = newNum;
  }
  }
  displayArea.appendChild(content);
}

function numClick() {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach((number) => {
    number.addEventListener('click', function (e) {
      num = e.target.textContent;
      updateDisplay(num)
    });
  });
}

updateDisplay(num);
numClick();


