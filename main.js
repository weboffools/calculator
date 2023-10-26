let numA = '';
let numB = '';
let state = 0;
let operator = '';
let total;

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
  content.textContent = num;
  displayArea.appendChild(content);
  
}

function btnClick() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {

      let btn = e.target.textContent;
      
      if (/\d/.test(btn)) {
        if (state === 0) {
          numA += btn; 
        } else {
          numB += btn;
        }
      }
      else if (/[\+\-\*\/]/.test(btn)) {
        if (state === 0) {
          state = 1;
          operator = btn;
          console.log(numA);
        } else {
          let a = Number(numA);
          let b = Number(numB);
          console.log(`${numA} ${operator} ${numB}`);
          total = operate(a, b, operator);
          console.log(`Total: ${total}`);
          numA = String(total); 
          numB = '';
          operator = btn;
        }
      }
      else if (btn === '=') {
        if (numA && numB) {
        let a = Number(numA);
        let b = Number(numB);
        total = operate(a, b, operator);
        console.log(`Total: ${total}`);
        numA = '';
        numB = '';
        operator = '';
        state = 0;
        }
      }
    });
  });
}
   

// updateDisplay(firstNum);
btnClick();


