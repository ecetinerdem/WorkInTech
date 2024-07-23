function randomNumber() {
    let sayi = Math.floor(Math.random() * 1000);
    if (sayi % 2 === 0) {
      return sayi + ' sayısı çift sayıdır';
    } else {
      return sayi + ' sayısı tek sayıdır';
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = randomNumber;