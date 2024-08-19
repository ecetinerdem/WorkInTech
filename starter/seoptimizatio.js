function convertToSentence(car) {
    const currentYear = new Date().getFullYear();
    const uretimYili = currentYear - car.yas;
  
    return `${uretimYili} yılında trafiğe çıkışlı ${car.marka} ${
      car.model
    } model arabanın ${car.vites.toLowerCase()} vitesi var ve ${car.yakit.toLowerCase()} ile çalışmaktadır. Güncel satış fiyatı ${
      car.fiyat
    } TL'dir.`;
  }