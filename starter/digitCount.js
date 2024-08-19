const rakamlar = (bigNumber) => {
    const numberStr = bigNumber.toString();
  
    const digitCount = {};
  
    for (const char of numberStr) {
      if (char >= '0' && char <= '9') {
        if (digitCount[char]) {
          digitCount[char]++;
        } else {
          digitCount[char] = 1;
        }
      }
    }
  
    return digitCount;
  };