let expression = '';

function press(value) {
  expression += value;
  document.getElementById('display').innerText = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').innerText = result;
    expression = result.toString();
  } catch (e) {
    document.getElementById('display').innerText = 'Error';
    expression = '';
  }
}
