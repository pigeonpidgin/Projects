function sumPrimes(num) {
  let primesArray = [];
  let numsArray = [];
  for (let i = 1; i <= num; i++){
    numsArray.push(i)
  }
  for (let x = 2; x <= numsArray.length; x++){
    let flag = 0
    for (let i = 2; i < x; i++){
      if (x % i == 0){
        flag = 1
        break;
      }
      }
      if (x > 1 && flag == 0){
        primesArray.push(x)
    }
  }
  let sum = 0;
  for (let i = 0; i < primesArray.length; i++){
    sum = sum + primesArray[i];
  }
  return sum;
}
