function difMaxMin(notes) {
    let min = Math.min(...notes);
    let max = Math.max(...notes);
    return max - min;
  }