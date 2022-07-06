const equals = document.getElementById("equals").addEventListener('click', calculate);

let operands = {
  operandOne: 1,
  operandTwo: 2,
  operator: '+'
}

let operators = {
  '+': (numOne, numTwo) => numOne + numTwo,
  '-': (numOne, numTwo) => numOne - numTwo
}


function calculate(){
  if (operands.operandOne == undefined) return;
  let result = operators[operands.operator](operands.operandOne, operands.operandTwo)
  console.log(result);
  return result;
}
