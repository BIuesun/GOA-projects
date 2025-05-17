function flatteningouthdought(array2D) {
    const result = [];
    for (let i = 0; i < array2D.length; i++) {
      for (let j = 0; j < array2D[i].length; j++) {
        if (array2D[i][j] % 2 === 0) {
          result.push(array2D[i][j]);
        }
      }
    }
    return result;
  }
  