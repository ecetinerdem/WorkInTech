const calculateRevenue = (carList, sellerType) => {
    return carList
      .filter((car) => car.seller_type === sellerType)
      .reduce((total, car) => total + car.selling_price, 0);
  };
  