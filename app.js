//NEXT: find a way to allow for two button presses before the arithmetic operation goes through
    //research Await and Promises pg 194

const nums = document.getElementById("numbers");
let numNodes = nums.getElementsByTagName("button");
console.log("number of buttons: " + numNodes.length);
console.log("value of first button: " + numNodes[0].innerText);


nums.addEventListener('click', function createNum(event){
    let userNumber = event.userNumber.target.innerText;    
})

//nums.addEventListener('click', test);
//let numArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];


let numArray = [1, 2];
function makeNums(){
    for (let i = 0; i < numNodes.length; i++){
        for (let j = 0; j < numArray.length; j++){
            if (numNodes[i].innerText == numArray[j]){
                let calcNum = numNodes[j].innerText;
                console.log("output from MakeNums funct: " + calcNum);   
                return () => calcNum;
            }else{
                console.log("no num")
            }
        }
        return false;
    }
}

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