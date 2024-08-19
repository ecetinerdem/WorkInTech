function totalCharCount(array) {
    return array.join('').length;
  }


  function isHardToComprehend(word) {
    if (word.length >= 10) {
      return true;
    } else {
      return false;
    }
  }