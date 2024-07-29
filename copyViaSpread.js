function newCar(car) {
  let newCarObj = { ...car };

  const [marka, model] = newCarObj.model.split(' ', 2);
  newCarObj.marka = marka;
  newCarObj.model = model;

  delete newCarObj.yas;

  let mtv;
  if (car.yas <= 10 && car.yas >= 1) {
    mtv = 1773;
  } else if (car.yas > 10) {
    mtv = 520;
  }

  let otv;
  if (car.fiyat < 1450000) {
    otv = 10;
  } else if (car.fiyat >= 1450000) {
    otv = 40;
  }

  let isDomestic;
  if (marka === 'TOGG') {
    isDomestic = true;
  } else {
    isDomestic = false;
  }

  return { ...newCarObj, otv, mtv, isDomestic };
}