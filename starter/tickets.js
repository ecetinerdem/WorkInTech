function groupEvenAndOdds(array) {
    let evenArray = [];
    let oddArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenArray.push(array[i]);
      } else {
        oddArray.push(array[i]);
      }
    }
  
    return evenArray.concat(oddArray);
  }