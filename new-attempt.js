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
        if (res != undefined){
            //i need to have the chain operation go to the second operand
            math.second = input * 1;
        }else{
            math.first = input * 1;
        }
        console.log("first operand: " + math.first);
        console.log(typeof math.first);
        console.log("second operand: " + math.second);
        console.log(typeof math.second);
    })
    
}

function eval(){
    console.log("test: ")
    console.log(math.first + math.second)

}
let res;
var i = 0;
console.log(res)
let operators = document.getElementsByClassName("operators")
for (item of operators){
    item.addEventListener('click', (event) => {
        input = "";
        res = 0;
        op = event.target.innerText;
        math.operator.push(op);
        console.log(math.operator);
        if (math.second != 0){
            res = operations[math.operator[i]](math.first, math.second);
            i++;
            console.log(res);
            math.second = 0;
            math.first = res;
            console.log("new first operand: " + math.first);
            return res;
        }
    })
}

let x = 1 + 2 + 3 - 4 * 5;
/*
1: comes from input and put in obj as first
+: comes from input and put in obj as operator
2: comes from input and put in obj as second
-> evaluate -> clear properties (operator, second, first) -> set result as first
+: comes from input and put in obj as operator
3: comes from input and put in obj as second
-> evaluate -> clear properties (operator, second, first) -> set result as first */

let math = {
    first: 0,
    second: 0,
    operator: [],
    }
let operations = {
    '+': (valueOne, valueTwo) => valueOne + valueTwo,
    '-': (valueOne, valueTwo) => valueOne - valueTwo,
    '*': (valueOne, valueTwo) => valueOne * valueTwo,
    '/': (valueOne, valueTwo) => valueOne / valueTwo
}

let r = document.getElementById("test-one");
let output = 0;
function operate(){
    output = operations[math.operator[math.operator.length - 1]](math.first, math.second);
    console.log(output);
    math.first = output;
    math.second = 0;
    r.innerText = output;
    
}