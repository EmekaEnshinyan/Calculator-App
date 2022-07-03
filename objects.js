
//construct object and create the properties
 //which will be the arrays and the methods
  //which will invoke the proper operation

  /* DESIDERATA:
    1. chain operations (e.g. 1 + 6 * 2 / 4 //3)
    2.
  */
const equalsBtn = document.getElementById("equals").addEventListener('click', result);
const operatorSet = new Set(["+", "-", "*", "/"]);
const numSet = new Set(["1","2","3","4","5","6","7","8","9","0","."]);


let buttons = document.getElementsByClassName("number");
for (item of buttons){
    item.addEventListener('click', (event) => {
        let input = event.target.innerText;
        if (objOne.operators == ""){
            objOne.operandOne += input;
            console.log("operandOne")
            console.log(typeof objOne.operandOne)
            console.log(objOne.operandOne)
        }else{
            objOne.operandTwo += input;
            console.log("operandTwo")
            console.log(objOne.operandTwo)
        }
    })
}

let operator = document.getElementsByClassName("operator");
for (item of operator){
    item.addEventListener('click', (event) => {
        let input = event.target.innerText;
        if (!objOne.operators.includes("+", "-", "*", "/"))
        objOne.operators += input;
        console.log(objOne.operators)
        return;
    })
    
}

let x = 11+22+33;
console.log(x)
let objOne = {
	operandOne: '',
    operandTwo: "",
	operators: [],
	operation: function(){
        let result = objOne.operandOne + objOne.operators + objOne.operandTwo;
        console.log(result);
        console.log(typeof result);
        return result;
    },
	
}
console.log(objOne.operandOne)
function result(){
    console.log("result test")
    objOne.operation();
}
let testOne = document.getElementById("test-one").innerText = objOne.opHolder;
