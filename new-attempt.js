let math = {
    firstOperand: 0,
    secondOperand: 0,
    operator: [],
    }

input = "";
let numbers = document.getElementsByClassName("container-numbers")
for (item of numbers){
    item.addEventListener('click', (event) =>{
        let value = event.target.innerText;
        input += value; 
        if (res != undefined){
            math.secondOperand = input * 1;
        }else{
            math.firstOperand = input * 1;
        }
        console.log("first operand: " + math.firstOperand);
        console.log(typeof math.firstOperand);
        console.log("second operand: " + math.secondOperand);
        console.log(typeof math.secondOperand);
    })    
}

function eval(){
    console.log("test: ")
    console.log(math.firstOperand + math.secondOperand)
}
let res;
var i = 0;
console.log(res)
let operators = document.getElementsByClassName("container-operators")
for (item of operators){
    item.addEventListener('click', (event) => {
        input = "";
        res = 0;
        op = event.target.innerText;
        math.operator.push(op);
        console.log(math.operator);
        if (math.secondOperand != 0){
            res = operations[math.operator[i]](math.firstOperand, math.secondOperand);
            i++;
            console.log(res);
            math.secondOperand = 0;
            math.firstOperand = res;
            console.log("new firstOperand operand: " + math.firstOperand);
            return res;
        }
    })
}

const equalsBtn = document.getElementById("equals").addEventListener('click', operate);
let output = 0;
function operate(){
    output = operations[math.operator[math.operator.length - 1]](math.firstOperand, math.secondOperand);
    console.log(output);
    math.firstOperand = output;
    math.secondOperand = 0;
    let result = document.getElementById("result");
    result.innerText = output;
}

let memoryClear = document.getElementById('memory-clear')

let operations = {
    '+': (valueOne, valueTwo) => valueOne + valueTwo,
    '-': (valueOne, valueTwo) => valueOne - valueTwo,
    '*': (valueOne, valueTwo) => valueOne * valueTwo,
    '/': (valueOne, valueTwo) => valueOne / valueTwo
}
