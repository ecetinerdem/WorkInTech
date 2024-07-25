function totalRemainder(array) {
    let sum = 0;
  
    // Return 0 if the array is empty
    if (array.length === 0) {
      return 0;
    }
  
    // Loop through each element in the array
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 3 !== 0) {
        // Check if the element is not divisible by 3
        sum += array[i] % 3; // Add the remainder to sum
      }
    }
  
    return sum; // Return the total sum after the loop
  }