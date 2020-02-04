function complementPair(complement, array) {
  for(let i = 0; i < array.length; i++) {
    let sum = 0;
    for(let j = i; j < array.length; j++) {
      sum = array[j] + array[i];
      if(sum === complement) {
        return [array[i], array[j]];
      }
    }
  }
  return -1;
}

let pair = complementPair(0, [4, 5, 2, 6, 1, 19, 3]);
console.log(pair);