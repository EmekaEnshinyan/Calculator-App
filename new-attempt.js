/*
Given a user wants to perform multiple calculations
when the user inputs the first operand
and the user inputs the operator
when the user inputs the second operand
and the user presses equals
then the result should be displayed
and the user inputs another operator
when the user inputs a third operand
and the user presses equals
then the second result should be displayed
 */
const equalsBtn = document.getElementById("equals").addEventListener('click', operate);
let final = 0
input = "";
let numbers = document.getElementsByClassName("number")
for (item of numbers){
    item.addEventListener('click', (event) =>{
        let value = event.target.innerText;
        input += value; 
        if (math.operator != ""){
            math.second = input * 1;
        }else{
            math.first = input * 1;
        }
        console.log(math.first)
        console.log(typeof math.first)
        console.log(math.second)
        console.log(typeof math.second)
    })
}

let operators = document.getElementsByClassName("operators")
for (item of operators){
    item.addEventListener('click', (event) => {
        let o = event.target.innerText;
        console.log(math.operator)
        input = "";
        math.operator = o;
        o = "";
        if (math.second != 0){
            output = operations[math.operator](math.first, math.second);
        }
    })
}

let math = {
    first: 0,
    second: 0,
    operator: "",
    }
let operations = {
    '+': (valueOne, valueTwo) => valueOne + valueTwo,
    '-': (valueOne, valueTwo) => valueOne - valueTwo,
    '*': (valueOne, valueTwo) => valueOne * valueTwo,
    '/': (valueOne, valueTwo) => valueOne / valueTwo
}

let output = 0;
function operate(){
    output = operations[math.operator](math.first, math.second);
    console.log(output);
    math.first = output;
    math.second = 0;
    math.operator = ""
}