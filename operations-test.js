let minus = 2
let o1 = 5;
let o2 = 10;
function subtract(){
    let difference = o2 - o2;
    return difference;
}
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

   function operationCounters(o, f){
    if (o > 0){
        f;
    }
   }
operationCounters(minus, subtract);

//--------------------

if (operandMap.size < 1){
    operandMap.set(operandKey, doubleDigit.get(0))
    operandKey++
    console.log("operands map")
    console.log(operandMap)  
    return null;
  }else if (operandMap.size == 1){
  operandMap.set(operandKey, doubleDigit.get(0))
  operandKey++
  sum = operandMap.get(operandMap.size - 1) + operandMap.get(operandMap.size - 2)
  console.log("operands map")
  console.log(operandMap)
  equalsMap.set(key, sum)
  key++;
  console.log("equalsMap");
  console.log(equalsMap);
    console.log("sum");
    console.log(sum)
    plus++
    return sum;
  }else if (operandMap.size > 1) {
    sum = equalsMap.get(equalsMap.size - 1) + doubleDigit.get(0);
    plus++
    console.log("sum from equalsmap")
    console.log(sum)
    equalsMap.set(key, sum);
    key++
    return sum;
  }

  function setMap(map, counter){
    map.set(counter, doubleDigit.get(0))
    counter++
  }

  