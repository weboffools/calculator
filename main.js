let num = [];
let stack = [];
let operator;

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

function operate(a, b, op) {
  console.log(`You are going to ${op} ${a} and ${b}`);
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function clearDisplay() {
  displayArea.replaceChildren();
  const content = document.createElement('span');
  content.setAttribute('id', 'display-number');
  content.textContent = '0';
  displayArea.appendChild(content)
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

      let btn = e.target.textContent;
      if (/\d/.test(btn)) {
        num.push(btn);
        updateDisplay(btn);
      }
      else if (/[\+\-\*\/]/.test(btn)) {
        operator = btn;
        stack.push(Number(num.join('')));
        num = [];
      }
      else if (btn === 'AC') {
        clearDisplay();
        num = [];
      }

//      let btnClass = e.target.classList[0];
//      let btnContent = e.target.textContent; 
//      switch (btnClass) {
//        case ('number'):
//          updateDisplay(btnContent);
//          break;
//        case ('operator'):
//          if (btnContent === '=') {
//            if (!secondNum) {
//            secondNum = getNum();
//            let answer = operate(firstNum, secondNum, operator);
//            updateDisplay(answer);
//            }
//            break;
//          } else {
//            if (!firstNum) {
//              firstNum = getNum();
//              operator = btnContent;
//            }
//            else if (!secondNum) {
//              secondNum = getNum();
//              operator = btnContent;
//              total = operate(firstNum, secondNum, operator);
//            } else {
//              firstNum = total;
//              operator = btnContent;
//            }
//            clearDisplay();
//            break;
//          }
//        case 'tool':
//          if (btnContent === 'AC') {
//          clearDisplay();
//          break;
//          }
//      }

    });
  });
}

// updateDisplay(firstNum);
btnClick();


