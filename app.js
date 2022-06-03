/*NEXT: need a way to have the first number stored separately and then allow the function to call for another number. maybe turn btnValue to const
and make another one
    another idea is to use a hashmap, where each number will be added to the map*/
/*CONFUSIONS: e.preventDefault(); |*/
let nums = document.getElementById("numbers");
let numNodes = nums.getElementsByTagName("button");
console.log("number of buttons: " + numNodes.length);
console.log("value of first button: " + numNodes[0].innerText);

//bind value of whichever number button pressed
let btnValue;
    nums.addEventListener('click', function(event){
        event.preventDefault;
        btnValue = getOperands(event.target.innerText); 
    });

/*be able to log the value of button pressed*/
//output operand
let operandOne;
function getOperands(value){
    console.log(value); 
    operandOne = value;
    return operandOne;
}

/*find a way to place value(s) of button presses into an addition function*/
let addBtn = document.getElementById("addition").addEventListener('click', addition);
let result = document.getElementById("result");

function addition(operandTwo){
    operandTwo = Number(btnValue)
    console.log(operandTwo);
    btnValue = 0;
    return operandTwo;
}

let equalsBtn = document.getElementById("equals").addEventListener('click', equals);

function equals(){

    result.append(`result: ${addition()}`);
}













/*extra*/
//let numArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
//let numArray = [1, 2];