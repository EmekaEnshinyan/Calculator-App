//how much should OOP play a role in js?
/*
prototype: 
.this: 
class: 
constructors: */
const btnOne = document.getElementById("button-one");
const btnTwo = document.getElementById("button-two");
const btnThree = document.getElementById("button-three");
const obj = {
  w: 5,
  x: [1, 2, 3, 4, 5],
  y: true,
  invoke: function(){
      console.log("hello");
  }
}
//returns property of obj
console.log(obj.x);
//modifies obj property
console.log(obj.w = 10);
//invokes funciton method in obj
obj.invoke();

/*
//construct object and create the properties
 //which will be the arrays and the methods
  //which will invoke the proper operation

const o1 = document.getElementById("one");
const o2 = document.getElementById("two");
const o3 = document.getElementById("+");
const o4 = document.getElementById("-");

let object = {
	operands: "",
	opHolder: "",
	operators: "",
	operation: function(){
	(!this.operand.has() === NaN)
		return 
	}
	result: ""
	
}
let first = object.operands = o1;
let second = object.operands = o2;
let operation = object.operators = o3;

return `${first}${operation}${second}`


function add(o1, o2){ //doesn't work. so
			//instead, need to 
			//store whatever num
			//was pressed


}

//call each mutable part and build the chained 
 //operations

//this includes the operation function
let operation = {
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
*/