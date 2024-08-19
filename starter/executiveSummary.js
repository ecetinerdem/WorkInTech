const analyzeData = (data, brand, year) => {
    const filteredCars = data.filter(
      (car) => car.name.includes(brand) && car.year === year
    );
  
    const count = filteredCars.length;
    const totalRevenue = filteredCars.reduce(
      (acc, car) => acc + car.selling_price,
      0
    );
  
    if (count > 0) {
      return `Model yılı ${year} olan ${brand} marka ${count} arabanın toplam piyasa değeri ${totalRevenue} TL'dir.`;
    } else {
      return `Model yılı ${year} olan ${brand} marka araba stoklarda bulunamamıştır!`;
    }
  };