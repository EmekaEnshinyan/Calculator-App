
//construct object and create the properties
 //which will be the arrays and the methods
  //which will invoke the proper operation

  /* DESIDERATA:
    1. chain operations (e.g. 1 + 6 * 2 / 4 //3)
    2.
  */
const equalsBtn = document.getElementById("equals").addEventListener('click', calculate);
const operatorSet = new Set(["+", "-", "*", "/"]);
const numSet = new Set(["1","2","3","4","5","6","7","8","9","0","."]);


let buttons = document.getElementsByClassName("number");
for (item of buttons){
    item.addEventListener('click', (event) => {
        let input = event.target.innerText;
        if (objOne.operator == ""){
            objOne.operandOne += input;
            console.log("operandOne")
            console.log(typeof objOne.operandOne)
            console.log(objOne.operandOne)
        }else{
            objOne.operandTwo += input;
            console.log("operandTwo")
            console.log(objOne.operandTwo)
        }
        input = "";
       
    })
}

let operator = document.getElementsByClassName("operator");
for (item of operator){
    item.addEventListener('click', (event) => {
        let input = event.target.innerText;
        if (!objOne.operator.includes("+", "-", "*", "/"))
        objOne.operator += input;
        console.log(objOne.operator)
        return;
    })
    
}

const objOne = {
	operandOne: "",
    operandTwo: "",
	operator: ""
}

const objTwo = {
    '+': (numOne, numTwo) => numOne + numTwo,
    '-': (numOne, numTwo) => numOne - numTwo,
    '*': (numOne, numTwo) => numOne * numTwo,
    '/': (numOne, numTwo) => numOne / numTwo
}

function calculate(){
    if (objOne.operandOne.length === 0) return;
    let result = objTwo[objOne.operator](objOne.operandOne * 1, objOne.operandTwo * 1);
    console.log(result);
    return result;
  }
