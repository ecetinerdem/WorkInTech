function calTuition(array, name) {
    let tuition = 150000;
    const position = array.indexOf(name);
  
    if (position >= 0 && position <= 2) {
      return 0;
    } else if (position >= 3 && position <= 5) {
      return tuition * 0.5;
    } else if (position >= 6 && position <= 9) {
      return tuition * 0.7;
    } else if (position >= 10) {
      return tuition;
    } else {
      return tuition;
    }
  }