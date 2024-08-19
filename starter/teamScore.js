const takimSkoru = () => {
    const score = Math.floor(Math.random() * 16 + 10);
    return score;
  };
  
  const macSkoru = (takimSkoru, period = 4) => {
    let evSahibiTakimSkor = 0;
    let deplasmanTakimiSkor = 0;
    for (let i = 1; i <= period; i++) {
      evSahibiTakimSkor = evSahibiTakimSkor + takimSkoru();
      deplasmanTakimiSkor = deplasmanTakimiSkor + takimSkoru();
    }
    const result = {
      evSahibiTakim: evSahibiTakimSkor,
      deplasmanTakimi: deplasmanTakimiSkor,
    };
    return result;
  };