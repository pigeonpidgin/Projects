function palindrome(str) {
  let palBool = true;
  const firstArr = str.toLowerCase().split('')
  let palindromeArr = []
  let ya = []
  for (let i = 0; i < firstArr.length; i++){
    if (/[a-z0-9]/.test(firstArr[i]) == true){
      palindromeArr.push(firstArr[i]);
    }
  }
  for (let i = 0; i < palindromeArr.length; i++){
    ya.unshift(palindromeArr[i])
  }
  for (let i = 0; i < palindromeArr.length; i++){
    if (palindromeArr[i] !== ya[i]){
      palBool = false;
    }
  }
