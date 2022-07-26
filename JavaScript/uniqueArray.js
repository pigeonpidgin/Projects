function uniteUnique(...arr) {
  const allArrs = [...arr]
  let oneBigUnion = []
  for (arr in allArrs){
    for (let i = 0; i < allArrs[arr].length; i++){
      oneBigUnion.push(allArrs[arr][i]);
    }
  }
  let result = []
  for(let i = 0; i < oneBigUnion.length; i++){
    if (!result.includes(oneBigUnion[i])){
      result.push(oneBigUnion[i]);
    }
  }
  return result;
}
