function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strArray = str.split('');
  const indexStart = alphabet.indexOf(strArray[0]);
  const len = str.length;
  const compArrison = [...alphabet.slice(indexStart, indexStart + len)]
  for (let i = 0; i < compArrison.length; i++){
    if (strArray[i] !== compArrison[i]){
      const result = compArrison[i];
      return result;
    }
  }
}
