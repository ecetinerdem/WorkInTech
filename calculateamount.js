function tutarHesapla(donators) {
    let count = 0;
    const name = 'ahmet';
    const lowerCaseDonators = donators
      .map((donator) => donator.toLowerCase())
      .join('');
  
    if (lowerCaseDonators.length === 0) {
      return 0;
    }
    for (let i = 0; i < lowerCaseDonators.length; i++) {
      if (name.includes(lowerCaseDonators[i])) {
        count++;
      }
    }
  
    return count * 1000;
  }