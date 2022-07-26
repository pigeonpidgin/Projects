function pairElement(str) {
  let match = function(dna, paiRr) {
    switch (dna) {
      case "A":
        paiRr.push(["A", "T"]);
        break;
      case "T":
        paiRr.push(["T", "A"]);
        break;
      case "C":
        paiRr.push(["C", "G"]);
        break;
      case "G":
        paiRr.push(["G", "C"]);
        break;
    }
  };
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    match(str[i], pairs);
  }
  console.log(pairs);
  return pairs;
}
