function isPalindrom(string) {
    let lowerString = string.toLowerCase();
    let reversedString = lowerString.split('').reverse().join('');
    return lowerString === reversedString;
  }