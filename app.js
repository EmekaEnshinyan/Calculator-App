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
let convertToNum;
//bind operand to number pressed and add to array
nums.addEventListener("click", function (event) {
  let btnValue = getInputs(event.target.innerText);
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
let operandMap = new Map();
let operandKey = 0;
let singleDigit = new Map();
let doubleDigit = new Map();
function makeMaps() {
  if (singleDigit.get(0) < 10){
    let keySingle = 0;    
    singleDigit.set(keySingle, convertToNum);
    console.log(singleDigit);
  }else{
    let keyDouble = 0;
    doubleDigit.set(keyDouble, convertToNum);
    console.log(doubleDigit);
  }
  

}

let equalsBtn = document
  .getElementById("equals")
  .addEventListener("click", equals);
let result = document.getElementById("result");
//display the value at last equalsMap index
let total = 0;
function equals(event) {
    if (plus > 0){
        plus = 0;
        total = equalsMap.get(equalsMap.size - 1) + doubleDigit.get(0);
        result.innerText = `result: ${total}`;
        equalsMap.set(key, total)
        
        console.log("total in equalsMap")
        console.log(equalsMap)
       
        inputs = [];
        sequence = [];
        doubleDigit.set(0, 0);
        return total;

    }
    if (minus > 0){
        minus = 0;
        let total = equalsMap.get(equalsMap.size - 1) - doubleDigit.get(0);
        result.innerText = `result: ${total}`;
        equalsMap.set(key, total)
        key++    
        console.log("total in map")
        console.log(equalsMap)
        //doubleDigit.clear();
        inputs = [];
        sequence = [];
        doubleDigit.set(0, 0);
        return total;
      }
    if (times > 0){
        times = 0;
        let total = equalsMap.get(equalsMap.size - 1) * doubleDigit.get(0);
        result.innerText = `result: ${total}`;
        equalsMap.set(key, total)
        key++
        console.log("total in map")
        console.log(equalsMap)

        inputs = [];
        sequence = [];
        doubleDigit.set(0, 0);
        return total;
    }
    if (div > 0){
        div = 0;
        let total = equalsMap.get(equalsMap.size - 1) / doubleDigit.get(0);
        result.innerText = `result: ${total}`;
        equalsMap.set(key, total)
        key++
        console.log("total in map")
        console.log(equalsMap)
        doubleDigit.clear();
        inputs = [];
        sequence = [];
        doubleDigit.set(0, 0);
        return total;
    }
}


let addBtn = document.getElementById("addition").addEventListener("click", add);
//counter for how many times add() callled
let plus = 0;
function add() {
  console.log("add")
  
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
  sequence = [];
  inputs = [];
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
  }else if (doubleDigit.size >= 1){
    equalsMap.set(key, convertToNum)
    console.log("equalsMap");
    console.log(equalsMap)
    plus++
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
    if (equalsMap.size > 0 && doubleDigit.size < 1){
    difference = equalsMap.get(equalsMap.size - 1) - doubleDigit.get(0);
    console.log("difference: " + difference);
    minus++;
    console.log("minus stack=" + minus)
    equalsMap.set(key, difference);
    key++;
    console.log("equalsMap:");
    console.log(equalsMap);
    return difference;
  }else if (doubleDigit.size >= 1){
    equalsMap.set(key, convertToNum)
    console.log("equalsMap");
    console.log(equalsMap)
    minus++
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
    if (div > 0){
      div = 0;
      divide();
    }
    let product = 0;
     if (equalsMap.size > 0 && doubleDigit.size < 1){
     product = equalsMap.get(equalsMap.size - 1) * doubleDigit.get(0);
     console.log("product: " + product);
     times++;
     console.log("times stack="+times)
     equalsMap.set(key, product);
     key++;
     console.log("equalsMap:");
     console.log(equalsMap);
     return product;
   }else if (doubleDigit.size >= 1){
    equalsMap.set(key, convertToNum)
    console.log("equalsMap");
    console.log(equalsMap)
    times++
    return product;

}
}

let divideBtn = document.getElementById("division").addEventListener('click', divide);
let div = 0;
function divide(){
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
  if (times > 0){
    times = 0;
    multiply();
  }
  let quotient = 0;
   if (equalsMap.size > 0 && doubleDigit.size < 1){
   quotient = equalsMap.get(equalsMap.size - 1) / doubleDigit.get(0);
   console.log("quotient: " + quotient);
   div++;
   console.log("div stack="+div)
   equalsMap.set(key, quotient);
   key++;
   console.log("equalsMap:");
   console.log(equalsMap);
   return quotient;
 }else if (doubleDigit.size >= 1){
  equalsMap.set(key, convertToNum)
    console.log("equalsMap");
    console.log(equalsMap)
    div++
    return quotient;

}
  }

//MC
let clear = document.getElementById("memory-clear")
clear.addEventListener('click', function (event) {
  event = result.innerText = "";
  event = equalsMap.clear();
  event = doubleDigit.clear();
  inputs = [];
  sequence = [];
  key = 0;
  plus = 0;
  minus = 0;
  times = 0;
  div = 0;
})
//MR
let recall = document.getElementById("memory-recall")
recall.addEventListener('click', function (event){
    event = equalsMap.get(equalsMap.size - 1);
    equalsMap.delete(equalsMap.size - 1);
    key--;
    console.log("recallValue: ")
    console.log(event)
    console.log(equalsMap)
    
    
    
  
  
})
  