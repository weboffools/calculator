
let currentTotal;
let num;
let operator;
let re = new RegExp("\d");

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
          break;
      }
    });
  });
}

updateDisplay(num);
btnClick();


