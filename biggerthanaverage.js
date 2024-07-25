function aboveAverage(array) {
    if (array.length === 0) {
      return 0; // Return an empty array if the input array is empty
    }
  
    // Calculate the average of the elements
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let average = sum / array.length;
  
    // Find and return elements greater than the average
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > average) {
        result.push(array[i]);
      }
    }
  
    return result.length;
  }