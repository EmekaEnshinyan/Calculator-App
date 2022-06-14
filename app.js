//abstract operand output
let operand;
function getInputs(value) {
  operand = Number(value);
  console.log(typeof value);
  return operand;
}

let nums = document.getElementById("numbers");
//global vars for all numbers handler
let inputs = [];
let sequence = [];
let counter = 0;
let btnValue;
let convertToNum;
//bind operand to number pressed and add to array
nums.addEventListener("click", function (event) {
  btnValue = getInputs(event.target.innerText);
  sequence.push(btnValue);
  //join array elements and regex out the commas; convert to a number
  let concatStr = sequence.join();
  let removeCommas = concatStr.replace(/,/g, "");
  convertToNum = Number(removeCommas);
  inputs.push(convertToNum);
  console.log("input: ")
  console.log(inputs);
  makeMaps();
  console.log("input")
  console.log(singleDigit)
  console.log(doubleDigit)
});



let equalsMap = new Map();
let key = 0;
let singleDigit = new Map();
let doubleDigit = new Map();
let keyOne = 0;
let keyTwo = 0;
function makeMaps() {
  if (singleDigit.get(0) < 10){
    singleDigit.set(keyOne, convertToNum);
    console.log(singleDigit)
  }else{
    doubleDigit.set(keyTwo, convertToNum);
    console.log(doubleDigit)
  }
}

let equalsBtn = document
  .getElementById("equals")
  .addEventListener("click", equals);
let result = document.getElementById("result");
//display the value at last equalsMap index
function equals(event) {
    if (plus == 1){
        result.innerText = `result: ${add()}`;
    }
    if (minus == 1){
        result.innerText = `result: ${subtract()}`;
    }
    if (times == 1){
        result.innerText = `result: ${multiply()}`;
    }
    if (times > 0){
        result.innerText = `result: ${divide()}`;
    }

  
}

let total = 0;
let sumArray = [];
let eCounter = 0;
let fCounter = 0;

let addBtn = document.getElementById("addition").addEventListener("click", add);
//counter for how many times add() callled
let plus = 0;
//add
//let sum = 0;
function add() {
  console.log("add")
   sequence = [];
   inputs = [];
  if (minus > 0){
   minus = 0;
   subtract();
   }
   if (times > 0){
   times = 0;
   multiply();
   }
  if (div > 0){
    div = 0;
    divide();
  }
    let sum = 0;
    if (equalsMap.size > 0){
    sum = equalsMap.get(equalsMap.size - 1) + doubleDigit.get(0);
    console.log("sum: " + sum)
    plus++
    console.log("plus stack="+plus)
    equalsMap.set(key, sum);
    key++;
    console.log("equalsMap:")
    console.log(equalsMap)
    return sum;
  }else{
    sum = doubleDigit.get(0);
    plus++
    console.log("plus stack="+plus);
    equalsMap.set(key, sum);
    key++;
    console.log("equalsMap:")
    console.log(equalsMap)
    return sum;
    
  }
}

let subtractBtn = document
  .getElementById("subtraction")
  .addEventListener("click", subtract);
//let difference = 0;
let minus = 0;
function subtract() {
  console.log("subtract");
  sequence = [];
  inputs = [];
  if (add > 0){
    add = 0;
    add();
  }
   if (times > 0){
   times = 0;
   multiply();
   }
  if (div > 0){
    div = 0;
    divide();
  }
    let difference = 0;
    if (equalsMap.size > 0){
    difference = equalsMap.get(equalsMap.size - 1) - doubleDigit.get(0);
    console.log("difference: " + difference);
    minus++;
    console.log("minus stack=" + minus)
    equalsMap.set(key, difference);
    key++;
    console.log("equalsMap:");
    console.log(equalsMap);
    return difference;
  }else{
    difference = doubleDigit.get(0);
    minus++;
    console.log("minus stack=" + minus)
    equalsMap.set(key, difference);
    key++;
    console.log("equalsMap:");
    console.log(equalsMap);
    return difference; 
    
}
}

let multiplyBtn = document.getElementById("multiplication").addEventListener('click', multiply);
let times = 0;
function multiply(){
    console.log("multiply")
    sequence = [];
    inputs = [];
    if (add > 0){
      add = 0;
      add();
    }
    if (minus > 0){
     minus = 0;
     subtract();
     }
     }
    if (div > 0){
      div = 0;
      divide();
    }
    let product = 0;
     if (equalsMap.size > 0){
     
     product = equalsMap.get(equalsMap.size - 1) * doubleDigit.get(0);
     console.log("product: " + product)
     times++
     equalsMap.set(key, product);
     key++;
     console.log("equalsMap:")
     console.log(equalsMap)
     return product;
   }else{
     product = doubleDigit.get(0);
     times++
     equalsMap.set(key, product);
     key++;
     console.log("equalsMap:")
     console.log(equalsMap)
     return product;
}

let div = 0;
function divide(){
  console.log("divide");

  sequence = [];
  inputs = [];
  if (add > 0){
    add = 0;
    add();
  }
  if (minus > 0){
   minus = 0;
   subtract();
   }
   if (times > 0){
   times = 0;
   multiply();
   }

   let sum = 0;
   if (equalsMap.size > 0){
   sum = equalsMap.get(equalsMap.size - 1) + doubleDigit.get(0);
   console.log("sum: " + sum)
   plus++
   console.log("plus stack="+plus)
   equalsMap.set(key, sum);
   key++;
   console.log("equalsMap:")
   console.log(equalsMap)
   return sum;
 }else{
   sum = doubleDigit.get(0);
   plus++
   console.log("plus stack="+plus);
   equalsMap.set(key, sum);
   key++;
   console.log("equalsMap:")
   console.log(equalsMap)
   return sum;
   
 }
}
//MC
// let clear = document.getElementById("memory-clear");
// clear.addEventListener("click", function (event) {
//   event = result.innerText = "";
//   finalValue = "";
//   sumArray = [];
//   arrayProduct = [];
//   arrayDivide = [];
// });
