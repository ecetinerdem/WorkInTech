const countStock = (carList, brand) => {
    const getBrand = (car) => {
      const [carBrand] = car.name.split(' ');
      return carBrand;
    };
  
    const stock = {};
  
    const filteredCars = carList.filter((car) => getBrand(car) === brand);
  
    filteredCars.forEach((car) => {
      if (stock[car.year]) {
        stock[car.year]++;
      } else {
        stock[car.year] = 1;
      }
    });
  
    return stock;
  };