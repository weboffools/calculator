
let total;
let firstNum;
let secondNum;
const displayArea = document.querySelector('#display');

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

function getNum () {
  const displayNum = document.querySelector('#display-number');
  return displayNum.textContent;
}

function operate(a, b) {
  console.log(`You are going to operate on ${a} and ${b}`);
  return 0;
}

function clearDisplay() {
  displayArea.replaceChildren();
  return 0;
}

function updateDisplay(num) {

  const content = document.createElement('span');
  content.setAttribute('id', 'display-number');

  if (displayArea.firstElementChild) {
    if (displayArea.firstElementChild.textContent === '0') {
      content.textContent = num;
    } else {
      let currentNum = displayArea.firstElementChild.textContent;
      let newNum = `${currentNum}${num}`;
      content.textContent = newNum;
    }
    displayArea.replaceChildren();
    displayArea.appendChild(content);
  } else {
    content.textContent = '0';
    displayArea.appendChild(content);
  }
  
}

function btnClick() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      let btnClass = e.target.classList[0];
      let btnContent = e.target.textContent; 
      switch (btnClass) {
        case ('number'):
          updateDisplay(btnContent);
          break;
        case ('operator'):
          if (btnContent === '=') {
            if (secondNum) {
            secondNum = getNum();
            let answer = operate(firstNum, secondNum);
            updateDisplay(answer);
            }
            break;
          } else {
            firstNum = getNum();
            operator = btnContent;
            break;
          }
      }
    });
  });
}

updateDisplay(firstNum);
btnClick();


