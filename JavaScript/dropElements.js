function dropElements(arr, func) {
  const newArr = [...arr];
  for (let i = 0; i <= newArr.length; i++){
    const number = newArr[i]
    if (func(number) === false){
      arr.shift();
    } else if (func(number) === true){
      return arr;
    }
  }
  return arr;
}
dropElements([1, 2, 3], function(n) {return n < 3; });
