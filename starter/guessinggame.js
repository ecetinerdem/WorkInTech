function tahminEt(mode, guess) {
    let secretNumber;
    if (mode === 'kolay') {
      secretNumber = Math.floor(Math.random() * 3);
    } else if (mode === 'orta') {
      secretNumber = Math.floor(Math.random() * 5);
    } else if (mode === 'zor') {
      secretNumber = Math.floor(Math.random() * 7);
    } else {
      return 'Geçerli bir mod giriniz';
    }
  
    if (typeof guess !== 'number' || guess < 0 || guess > 7) {
      console.log('0-7 aralığında seçim yapmalısın');
    }
  
    if (guess === secretNumber) {
      return 'Kazandın!';
    } else {
      return `Kaybettin: (kullanıcı: ${guess}, bilgisayar: ${secretNumber})`;
    }
  }