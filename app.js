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
    console.log("doubleDigit: ")
    console.log(doubleDigit);
  }
}

let equalsBtn = document
  .getElementById("equals")
  .addEventListener("click", equals);
let result = document.getElementById("result");
//display the value at last equalsMap index
let total = 0;
function equals() {
    let total = 0;
    if (plus > 0){
        plus = 0;
        total = add()
        result.value = `${total}`;
        equalsMap.set(key, total);
        console.log("total in equalsMap");
        console.log(equalsMap);
        inputs = [];
        sequence = [];
        doubleDigit.set(0, 0);
        return total;

    }else if (minus > 0){
        minus = 0;
        total = subtract();
        result.value = `${total}`;
        // equalsMap.set(key, total);
        // console.log("total in equalsmap");
        // console.log(equalsMap);
        inputs = [];
        sequence = [];
        //doubleDigit.set(0, 0);
        operandMap.clear();
        return total;
        
      }else if (times > 0){
        times = 0;
        total = multiply();
        result.value = `${total}`;
        equalsMap.set(key, total);
        key++;
        console.log("total in map");
        console.log(equalsMap);
        inputs = [];
        sequence = [];
        doubleDigit.set(0, 0);
        return total;
    }else if (div > 0){
        div = 0;
        total = divide();
        result.value = `${total}`;
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
  //operationCounters(minus, subtract);
  if (minus > 0){
    subtract();
    plus = 0
    console.log("plus " + minus)
    plus++
    return minus;
   }else if (times > 0){
   multiply();
   plus++
   times = 0;
   return times;
   }else if (div > 0){
    divide();
    plus++
    div = 0;
    return div;
  } 
  sequence = [];
  inputs = [];
  let sum = 0;
  if (equalsMap.size > 0){
    sum = equalsMap.get(equalsMap.size - 1) + doubleDigit.get(0)
    plus++
    console.log("sum from equalsmap")
    console.log(sum)
    equalsMap.set(key, sum);
    console.log(equalsMap)
    key++
    console.log("plus = " + plus)
    return sum; 
    }else if (operandMap.size < 1){
      operandMap.set(operandKey, doubleDigit.get(0))
      operandKey++
      console.log("operands map 1")
      console.log(operandMap)  
      plus++
      console.log("plus = " + plus)
      return null;
    }else if (operandMap.size == 1){
      operandMap.set(operandKey, doubleDigit.get(0))
      operandKey++
    sum = operandMap.get(operandMap.size - 1) + operandMap.get(operandMap.size - 2)
    console.log("operands map 2")
    console.log(operandMap)
    equalsMap.set(key, sum)
    key++;
    console.log("equalsMap");
    console.log(equalsMap);
      console.log("sum");
      console.log(sum)
      plus++
      console.log("plus = " + plus)
      return sum;
    }else if (operandMap.size > 1) {
      sum = equalsMap.get(equalsMap.size - 1) + doubleDigit.get(0);
      plus++
      console.log("sum from equalsmap")
      console.log(sum)
      equalsMap.set(key, sum);
      console.log(equalsMap)
      key++
      console.log("plus = " + plus)
      return sum;
    }   
  }

let subtractBtn = document
  .getElementById("subtraction")
  .addEventListener("click", subtract);
//let difference = 0;
let minus = 0;
function subtract() {
  let difference = 0;
  console.log("subtract");
  sequence = [];
  inputs = [];
  if (plus > 0){
    add();
    plus = 0
    console.log("plus " + plus)
    minus++
    return plus;
   }else if (times > 0){
   multiply();
   minus++
   times = 0;
   return times;
   }else if (div > 0){
    divide();
    minus++
    div = 0;
    return div;
  }
  if (equalsMap.size > 0){
      difference = equalsMap.get(equalsMap.size - 1) - doubleDigit.get(0)
      minus++
      console.log("difference from equalsmap")
      console.log(difference)
      equalsMap.set(key, difference);
      console.log(equalsMap)
      key++
      console.log("minus = " + minus)
      return difference; 
  }else if (operandMap.size < 1){
    operandMap.set(operandKey, doubleDigit.get(0))
      operandKey++
      console.log("operands map 1")
      console.log(operandMap)
   console.log(equalsMap)
   minus++
   console.log("minus = " + minus)
   return null; 
  }else if (operandMap.size == 1){
      difference = operandMap.get(operandMap.size - 1) - doubleDigit.get(0);
      console.log("operands map")
      console.log(operandMap)  
      equalsMap.set(key, difference)
    key++;
    console.log("equalsMap");
    console.log(equalsMap);
      console.log("minus = " + minus)
      minus++
      return difference;
    }else if (operandMap.size > 1){
      difference = equalsMap.get(equalsMap.size - 1) - doubleDigit.get(0);
      minus++
      console.log("difference from equalsmap")
      console.log(difference)
      equalsMap.set(key, difference);
      console.log(equalsMap)
      key++
      console.log("minus = " + minus)
      return difference;
  }
  
}
let multiplyBtn = document.getElementById("multiplication").addEventListener('click', multiply);
let times = 0;
function multiply(){
    console.log("multiply")
    sequence = [];
    inputs = [];
    if (plus > 0){
      add();
      plus = 0
      console.log("plus " + plus)
      times++
      return plus;
     }else if (minus > 0){
     subtract();
     times++
     minus = 0;
     return minus;
     }else if (div > 0){
      divide();
      times++
      div = 0;
      return div;
    } 
    let product = 0;
    if (equalsMap.size > 0){
      product = equalsMap.get(equalsMap.size - 1) * doubleDigit.get(0)
      times++
      console.log("difference from equalsmap")
      console.log(product)
      equalsMap.set(key, product);
      console.log(equalsMap)
      key++
      console.log("times = " + times)
      return product; 
  }else if (operandMap.size < 1){
    operandMap.set(operandKey, doubleDigit.get(0))
      operandKey++
      console.log("operands map 1")
      console.log(operandMap)
   console.log(equalsMap)
   times++
   console.log("times = " + times)
   return null; 
  }else if (operandMap.size == 1){
      product = operandMap.get(operandMap.size - 1) * doubleDigit.get(0);
      console.log("operands map")
      console.log(operandMap)  
      equalsMap.set(key, product)
    key++;
    console.log("equalsMap");
    console.log(equalsMap);
    times++
      console.log("times = " + times)
      return product;
    }else if (operandMap.size > 1){
      product = equalsMap.get(equalsMap.size - 1) * doubleDigit.get(0);
      times++
      console.log("product from equalsmap")
      console.log(product)
      equalsMap.set(key, product);
      console.log(equalsMap)
      key++
      console.log("times = " + times)
      return product;
  }
}

let divideBtn = document.getElementById("division").addEventListener('click', divide);
let div = 0;
function divide(){
  console.log("multiply")
  sequence = [];
  inputs = [];
  if (plus > 0){
    add();
    plus = 0
    console.log("plus " + plus)
    div++
    return plus;
   }else if (times > 0){
   multiply();
   div++
   times = 0;
   return times;
   }else if (minus > 0){
    subtract();
    div++
    minus = 0;
    return minus;
  } 
  let quotient = 0;
  if (equalsMap.size > 0){
    quotient = equalsMap.get(equalsMap.size - 1) / doubleDigit.get(0)
    div++
    console.log("difference from equalsmap")
    console.log(quotient)
    equalsMap.set(key, quotient);
    console.log(equalsMap)
    key++
    console.log("div = " + div)
    return quotient; 
}else if (operandMap.size < 1){
  operandMap.set(operandKey, doubleDigit.get(0))
    operandKey++
    console.log("operands map 1")
    console.log(operandMap)
 console.log(equalsMap)
 div++
 console.log("div = " + div)
 return null; 
}else if (operandMap.size == 1){
    quotient = operandMap.get(operandMap.size - 1) / doubleDigit.get(0);
    console.log("operands map")
    console.log(operandMap)  
    equalsMap.set(key, quotient)
  key++;
  console.log("equalsMap");
  console.log(equalsMap);
    console.log("div = " + div)
    div++
    return quotient;
  }else if (operandMap.size > 1){
    quotient = equalsMap.get(equalsMap.size - 1) / doubleDigit.get(0);
    div++
    console.log("difference from equalsmap")
    console.log(quotient)
    equalsMap.set(key, quotient);
    console.log(equalsMap)
    key++
    console.log("div = " + div)
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
  
    event = equalsMap.get(0);
    doubleDigit.set(0, Number(event));
    equalsMap.clear();
    operandMap.clear();
    operandKey = 0;
    key = 0;
    console.log("recallValue: ");
    console.log(event);
    console.log(equalsMap); 
    key = 0;
   plus = 0;
   minus = 0;
   times = 0;
   div = 0;
})
  