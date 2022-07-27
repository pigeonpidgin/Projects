function rot13(str) {
  const originalArray = str.split('')
  let output = []
  for (let i = 0; i <= originalArray.length; i++){
    const item = originalArray[i]
    if (/[A-Z]/.test(item) == false){
      output.push(item)
    } else if (item == 'A'){
      output.push('N')
    } else if (item == 'B'){
      output.push('O')
    } else if (item == 'C'){
      output.push('P')
    } else if (item == 'D'){
      output.push('Q')
    } else if (item == 'E'){
      output.push('R')
    } else if (item == 'F'){
      output.push('S')
    } else if (item == 'G'){
      output.push('T')
    } else if (item == 'H'){
      output.push('U')
    } else if (item == 'I'){
      output.push('V')
    } else if (item == 'J'){
      output.push('W')
    } else if (item == 'K'){
      output.push('X')
    } else if (item == 'L'){
      output.push('Y')
    } else if (item == 'M'){
      output.push('Z')
    } else if (item == 'N'){
      output.push('A')
    } else if (item == 'O'){
      output.push('B')
    } else if (item == 'P'){
      output.push('C')
    } else if (item == 'Q'){
      output.push('D')
    } else if (item == 'R'){
      output.push('E')
    } else if (item == 'S'){
      output.push('F')
    } else if (item == 'T'){
      output.push('G')
    } else if (item == 'U'){
      output.push('H')
    } else if (item == 'V'){
      output.push('I')
    } else if (item == 'W'){
      output.push('J')
    } else if (item == 'X'){
      output.push('K')
    } else if (item == 'Y'){
      output.push('L')
    } else if (item == 'Z'){
      output.push('M')
    }
  }
  return output.join('')
}
