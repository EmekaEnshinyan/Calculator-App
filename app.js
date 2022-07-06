//hold all elements to perform an operation
let math = {
  firstOperand: null,
  secondOperand: null,
  operator: null,
  };

let numbers = document.getElementsByClassName("number")
for (item of numbers){
  item.addEventListener('click', (event) =>{
      let number = event.target.innerText;
      
      if(math.operator === null){
         math.firstOperand = math.firstOperand !== null 
          ? math.firstOperand + number
          : number;
          result.innerText += math.firstOperand;
          /*displayResult(math.firstOperand)*/
      } else{
          math.secondOperand = math.secondOperand !== null 
          ? math.secondOperand + number
          : number;
          result.innerText += math.secondOperand;
          /*displayResult(math.secondOperand)*/
      }
  })
}
//for debugging
/*function displayResult(result){
  let r = document.getElementById("result");
  r.innerText = result;
  console.log(result)
}*/

let operators = document.getElementsByClassName("operator")
for (item of operators){
  item.addEventListener('click', (event) => {
    if (math.operator !== null){
        operate();
    }
    math.operator = event.target.value;
    result.innerText += math.operator;
  } 
)}

const equalsBtn = document.getElementById("equals").addEventListener('click', operate);
let result = document.getElementById("result");
function operate(){
  const output = operations[math.operator](
      math.firstOperand,
      math.secondOperand
  );  
  result.innerText = output;
  memoryStack.push(output);
  //reset in order to chain
  resetMath(output);
}

function resetMath(input){
  math.firstOperand = input;
  math.secondOperand = null;
  math.operator = null;
  
}

//framework for memory buttons
class Stack {
  constructor()
  {
      this.items = [];
  }
  //functions for Stack class
  push(element){
      this.items.push(element)
  }
  pop(){
      if (this.items.length === 0){
          return "empty stack";
      }
      return this.items.pop();   
  }
  isEmpty(){
      if (this.items.length === 0){
          return true;
      }
      return false;
  }
}

let memoryStack = new Stack();
let memoryRecall = document.getElementById('memory-recall').addEventListener('click', recall);
function recall(){
  let recalledValue = memoryStack.pop();
  math.firstOperand = recalledValue;
  result.innerText = recalledValue;
}

let memoryClear = document.getElementById('memory-clear').addEventListener('click', clear);
function clear(){
  math.firstOperand = null;
  math.secondOperand = null;
  math.operator = null;
  while (!memoryStack.isEmpty()){
      memoryStack.pop();
  }
  result.innerText = 0;
}



//perform operation based on math.operator value
let operations = {
  '+': (valueOne, valueTwo) => Number(valueOne) + Number(valueTwo),
  '-': (valueOne, valueTwo) => Number(valueOne) - Number(valueTwo),
  '*': (valueOne, valueTwo) => Number(valueOne) * Number(valueTwo),
  '/': (valueOne, valueTwo) => Number(valueOne) / Number(valueTwo)
}
