let result = document.getElementById('result');
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(num) {
  result.value += num;
}

function setOperator(op) {
  operator = op;
  operand1 = result.value;
  result.value = '';
}

function clearDisplay() {
  result.value = '';
  operator = '';
  operand1 = '';
  operand2 = '';
}

function calculate() {
  operand2 = result.value;
  let res = eval(operand1 + operator + operand2);
  result.value = res;
}
