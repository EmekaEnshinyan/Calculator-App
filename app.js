//NEXT: find a way to allow for two button presses before the arithmetic operation goes through
    //research Await and Promises pg 194
let nums = document.getElementById("numbers");
let numNodes = nums.getElementsByTagName("button");
console.log("number of buttons: " + numNodes.length);
console.log("value of first button: " + numNodes[0].innerText);

//bind value of whichever number button pressed
let result;
    nums.addEventListener('click', function(event){
        event.preventDefault;
        result = getOperands(event.target.innerText); 
    });

/*be able to log the value of button pressed*/


//output operand
function getOperands(value){
    console.log(value); 
    return value;
}

/*find a way to place value(s) of button presses into an addition function*/
function addition(operand){
    operand.preventDefault();
    console.log(result)
    

}

const addBtn = document.getElementById("addition").addEventListener('click', addition);







/*extra*/
//let numArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
//let numArray = [1, 2];