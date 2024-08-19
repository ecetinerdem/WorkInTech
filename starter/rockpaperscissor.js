function tasKagitMakas(userChoice) {
    const randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNum === 0) {
      computerChoice = 'taş';
    } else if (randomNum === 1) {
      computerChoice = 'kağıt';
    } else {
      computerChoice = 'makas';
    }
    if (userChoice == computerChoice) {
      return `Senin seçimin: ${userChoice}. Bilgisayarın seçimi: ${computerChoice}. Beraberlik!`;
    } else if (
      (userChoice === 'taş' && computerChoice === 'makas') ||
      (userChoice === 'makas' && computerChoice === 'kağıt') ||
      (userChoice === 'kağıt' && computerChoice === 'taş')
    ) {
      return `Senin seçimin: ${userChoice}. Bilgisayarın seçimi: ${computerChoice}. Kazandın!`;
    } else {
      return `Senin seçimin: ${userChoice}. Bilgisayarın seçimi: ${computerChoice}. Kaybettin!`;
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = tasKagitMakas;