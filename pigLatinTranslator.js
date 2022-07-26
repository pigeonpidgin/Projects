function translatePigLatin(str) {
  const vowelRegex = new RegExp(/[aeiou]/i)
  const splits = str.split('')
  let vowelList = []
    for (let i=0; i < str.length; i++){
      if (vowelRegex.test(str[i]) === true){
      vowelList.push(i)
      }
  }
  const firstVowel = vowelList[0];
  const firstCluster = splits.slice(0,firstVowel)
  if (vowelList.length == 0){
    const result = splits.join('').concat('ay')
    return result
  }
  else if (vowelRegex.test(splits[0]) == false){
    const restofWord = splits.slice(firstVowel,).concat(firstCluster)
    const result = restofWord.join('').concat('ay')
    return result;
  } else if (vowelRegex.test(splits[0]) == true){
    const result = splits.join('').concat('way')
    return result;
  }
  return result;
}
