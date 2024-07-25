function countOfChar(text, char) {
    let count = 0;
    let newText = text.toLowerCase();
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] === char) {
        count++;
      }
    }
    return count;
  }