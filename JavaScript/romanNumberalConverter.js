function convertToRoman(num) {
  let numbArr = [];
  let counter = num;
  while (counter >= 1000){
    numbArr.push('M')
    counter -= 1000
  }
  while (counter >= 900){
    numbArr.push('CM')
    counter -= 900
  }
  while (counter >= 500){
    numbArr.push('D')
    counter -= 500
  }
  while (counter >= 400){
    numbArr.push('CD')
    counter -= 400
  }
  while (counter >= 100){
    numbArr.push('C')
    counter -= 100
  }
  while (counter >= 90){
    numbArr.push('XC')
    counter -= 90
  }
  while (counter >= 50){
    numbArr.push('L')
    counter -= 50
  }
  while (counter >= 40){
    numbArr.push('XL')
    counter -= 40
  }
  while (counter >= 10){
    numbArr.push('X')
    counter -= 10
  }
  while (counter >= 9){
    numbArr.push('IX')
    counter -= 9
  }
  while (counter >= 5){
    numbArr.push('V')
    counter -= 5
  }
  while (counter >= 4){
    numbArr.push('IV')
    counter -= 4
  }
  while(counter >= 1){
    numbArr.push('I')
    counter -= 1
  }
return numbArr.join('');
}
