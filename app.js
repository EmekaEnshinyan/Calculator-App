//NEXT: find a way to allow for two button presses before the arithmetic operation goes through
    //research Await and Promises pg 194
let x;
let y;
const nums = document.getElementById("numbers");
let numNodes = nums.getElementsByTagName("button");
console.log("number of buttons: " + numNodes.length);
console.log("value of first button: " + numNodes[0].innerText);

//bind value of whichever number button pressed
let numBtnOne = nums.addEventListener('click', function callNum(event){
    console.log(event.target.innerText);
 
    //return event.target.innerText;
    
});
console.log(numBtnOne)

const addBtn = document.getElementById("addition").addEventListener('click', addition);


//let numArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
//let numArray = [1, 2];

function addition(event){
    event.preventDefault();

}
