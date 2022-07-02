
//construct object and create the properties
 //which will be the arrays and the methods
  //which will invoke the proper operation

  /* DESIDERATA:
    1. chain operations (e.g. 1 + 6 * 2 / 4 //3)
    2.
  */
const n1 = document.getElementById("one");
n1.addEventListener('click', concat);
const n2 = document.getElementById("two");
n2.addEventListener('click', concat);
const o1 = document.getElementById("+");
const o2 = document.getElementById("-");

let objOne = {
	operands: "",
	opHolder: "",
	operators: "",
	operation: function(){
	(!this.operand.has() === NaN)
		return 
	},
	result: "",
	
}

// let second = object.operands = n2;
// let operate = object.operators = o1;
let arr = [1,2,3,4,5,6,7,8,9,0];

//this should be useful
//return `${first}${operate}${second}`

//Create a regEx object

const reg = new RegExp('/(\d+)/');
let str = "this is a 1 test";
console.log(str.match(/(\d)/));
let numsArray = [];
function matching(m){
    let matches = m.match(/(\d)/);
    if (matches){
        numsArray.push(matches);
        console.log("array: " + numsArray)
    }
}

const testOne = document.getElementById("test-one").innerHTML = matching(str);




function concat(){
    console.log("test")
    let first = objOne.operands = n1;
    
    console.log(first)
}

function add(o1, o2){ //doesn't work. so
			//instead, need to 
			//store whatever num
			//was pressed
}

//call each mutable part and build the chained 
 //operations

//this includes the operation function
let objTwo = {
    numbers: [1,2,3,4,5],
    add: function (x) {
        this.numbers.forEach(x =>{
            this.numbers;
        })},
     subtract: function (y) {
        this.numbers.forEach(y =>{
            this.numbers;
        })},
}
