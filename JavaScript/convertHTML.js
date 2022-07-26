function convertHTML(str) {
  const stRr = str.split('');
  let emptyArray = []
  for (let item in stRr){
    if (stRr[item] == '<'){
      emptyArray.push('&lt;')
    } else if (stRr[item] === '>'){
      emptyArray.push('&gt;')
    } else if (stRr[item] === '&'){
      emptyArray.push('&amp;')
    } else if (stRr[item] === '"'){
      emptyArray.push('&quot;')
    } else if (stRr[item] === "'"){
      emptyArray.push('&apos;')
    } else (
      emptyArray.push(stRr[item])
    )
  };
  return emptyArray.join('')
}
