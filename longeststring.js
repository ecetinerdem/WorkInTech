function getLongestWord(sentence) {
    if (sentence.length === 0) {
      return ''; // Return an empty string if the sentence is empty
    }
  
    const wordArray = sentence.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord.length) {
        longestWord = wordArray[i];
      }
    }
  
    return longestWord;
  }