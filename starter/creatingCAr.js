function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
    const car = {};
  
    const today = new Date();
    const year = today.getFullYear();
  
    const uretimYili = year - yas;
  
    car.id = id;
    car.model = model;
    car.yakit = yakit;
    car.vites = vites;
    car.uretimYili = uretimYili;
    car.fiyat = fiyat;
    car.kilometre = kilometre;
  
    return car;
  }