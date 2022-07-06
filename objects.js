
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
        if (!objOne.operator.includes("+", "-", "*", "/"));
        objOne.operator += input;
        console.log(objOne.operator);
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

//objOne.operandOne != "" && objOne.operandTwo != "" && objOne.operator != ""
    let result = 0
    let nResult = 0
    
    //result =  objTwo[objOne.operator](objOne.operandOne * 1, objOne.operandTwo * 1);
    console.log(result);
    objOne.operator = "";
    objOne.operandTwo = "";
    input = "";
    objOne.operandOne = result;
    
        // nResult = objTwo[objOne.operator](objOne.operandOne * 1, objOne.operandTwo * 1);
        // objOne.operandOne = nResult;
    


    /*if (!operandOne.isEmpty){
        x = [+](1)(2)
        clear
        [-](x)(new input)
    } 
    */
  

/*
given: operandOne has a number
when: user presses an operator
then: append operator at the end of calculation
and: print result
when: user presses a number
then: append number at end of calculation
----
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



function calculate(){
    if (objOne.operandOne.length === 0) return;
    console.log(result);
    return result;
  }
