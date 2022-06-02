//NEXT: find a way to allow for two button presses before the arithmetic operation goes through
    //research Await and Promises pg 194

const nums = document.getElementById("numbers");
let numNodes = nums.getElementsByTagName("button");
console.log("number of buttons: " + numNodes.length);
console.log("value of first button: " + numNodes[0].innerText);


nums.addEventListener('click', makeNums);
//let numArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
let numArray = ["one", "two"];
let one2 = document.getElementById('one').innerText = "1"
//could have a function for each number

function makeNums(){
    for (let i = 0; i < numNodes.length; i++){
        if (numNodes[i].innerText == 1){
            let calcNum = numNodes[i].innerText;
            console.log("output from MakeNums funct: " + calcNum);   
            return () => calcNum;
        }else{
            console.log(false)
        }
    }
}
let operand = makeNums();

function addition(){

}


function inputNum(){
    // for ( var i; i < arr.length; i++){

    // }
    switch (one2){
        case "1": 
            console.log(1);
            break;
        case "2":
            console.log(2);
            break;
    }

}
function  add(operandOne, operandTwo){
    console.log(operandOne + operandTwo);
}