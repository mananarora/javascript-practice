// const result = [];
//
// function nestedToSingle(nestedArray) {
//   nestedArray.forEach(setNestedToSingleArray);
//   console.log(finalArray)
// }
//
// function setNestedToSingleArray(value) {
//   if(Array.isArray(value)) {
//     value.forEach(setNestedToSingleArray);
//   }
//   else {
//     result.push(value);
//   }
// }
const result = [];

function nestedToSingle(nestedArray) {
  nestedArray.forEach(value => {
    if(Array.isArray(value)) {
      nestedToSingle(value);
    }
    else {
      result.push(value);
    }
  });
}

nestedToSingle([1,2,[3,4,[5,6,[7]]],8,[9]]);
console.log(result);