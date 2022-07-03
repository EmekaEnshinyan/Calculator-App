if (numSet.has(input[input.length - 1])){
  objOne.opHolder += input;
  }else{
      objOne.operands.push(objOne.opHolder * 1)
      objOne.operators.push(input[input.length - 1].replaceAll('', ''))
      objOne.opHolder = "";
      return;
  }
  
  console.log(objOne.opHolder)
  console.log(objOne.operands)
  console.log(objOne.operators)