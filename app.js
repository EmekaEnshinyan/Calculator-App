//how much should OOP play a role in js?
/*
prototype: 
.this: 
class: 
constructors: */
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const obj = {
  w: 5,
  x: [1, 2, 3, 4, 5],
  y: true,
}
//returns property of obj
console.log(obj.x);
//modifies obj property
console.log(obj.w = 10);
//invokes funciton method in obj

