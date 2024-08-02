const currentYear = 2023;
const getRiskyCarList = (carsList) => {
  return carsList.filter((car) => {
    let age = currentYear - car.year;
    return (
      car.km_driven >= 250000 ||
      age >= 20 ||
      car.owner === 'Dördüncü veya Daha Fazla Sahibi'
    );
  });
};