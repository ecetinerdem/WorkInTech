const convertCurrency = (carList, currencyRate) => {
    return carList.map((car) => {
      car.selling_price = car.selling_price * currencyRate;
      return car;
    });
  };