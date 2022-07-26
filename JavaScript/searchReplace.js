function searchReplace(str, before, after) {
  const capitalRegex = new RegExp(/[A-Z]/);
  let wordArray = str.split(' ');
  const index = wordArray.indexOf(before);
  if (capitalRegex.test(before) == true){
    const newAfter = after[0].toUpperCase() + after.substring(1);
    wordArray.splice(index, 1, newAfter);
    return wordArray.join(' ')
  } else {
    const newAfter = after[0].toLowerCase() + after.substring(1);
    wordArray.splice(index, 1, newAfter);
    return wordArray.join(' ');
  }
}
