const macOzeti = (evSahibiTakim, deplasmanTakimi) => {
  let evSahibiSkoru = 0;
  let deplasmanSkoru = 0;
  let texts = [];

  const takimSkoru = () => {
    return Math.floor(Math.random() * 15 + 12);
  };

  for (let i = 1; i <= 4; i++) {
    evSahibiSkoru = evSahibiSkoru + takimSkoru();
    deplasmanSkoru = deplasmanSkoru + takimSkoru();
    const text = `${i}. Periyot: ${evSahibiTakim} ${evSahibiSkoru} - ${deplasmanTakimi} ${deplasmanSkoru}`;
    texts.push(text);
  }
  if (evSahibiSkoru === deplasmanSkoru) {
    const text = `Maç ${evSahibiSkoru} - ${deplasmanSkoru} ile uzatmalara gitti`;
    texts.push(text);
  } else {
    const text = `Maç Sonucu: ${evSahibi} ${evSahibiSkoru} - ${deplasmanSkoru} ${
      evSahibiSkoru > deplasmanSkoru ? 'kazandı' : 'kaybetti'
    }`;
    texts.push(text);
  }
  return texts;
};
