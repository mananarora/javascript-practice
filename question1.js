const finalArray = [];

function firstProgram() {
  let initialArray = [1,2,[3,4],5,[6]];
  initialArray.forEach(setFinalArray);
  console.log(finalArray);
}

function setFinalArray(value) {
  if(Array.isArray(value)) {
    value.forEach(val => finalArray.push(val));
  }
  else {
    finalArray.push(value);
  }
}
firstProgram();