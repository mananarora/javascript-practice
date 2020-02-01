function secondProgram(value) {
  let initialArray = [4, 5, 2, 6, 1, 19, 3];
  for(let i = 0; i < initialArray.length; i++) {
    let sum = 0;
    for(let j = i; j < initialArray.length; j++) {
      sum += initialArray[j] + initialArray[i];
      if(sum === value) {
        console.log(sum);
      }
    }
  }
}

secondProgram(22);