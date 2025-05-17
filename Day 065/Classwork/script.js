function convertingstringsreligion(stringArray) {
    let numberArray = [];
    
    for (let i = 0; i < stringArray.length; i++) {
      numberArray.push(Number(stringArray[i]));
    }
    
    return numberArray;
  }
  