const one = document.getElementById("one").addEventListener('click', inputNum);
const two = document.getElementById("two").addEventListener('click', inputNum);
const addBtn = document.getElementById("addition").addEventListener('click', add);
let arr = [one, two];
let one2 = document.getElementById('one').innerText = "1"
//could have a function for each number

function makeNums(){

    
    
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