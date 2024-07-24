function lottery(names) {
    let winners = [];
    
    winners = winners.concat(names.slice(0, 5));
  
    
    for (let i = 9; i < names.length; i += 10) {
      if (!winners.includes(names[i])) {
        winners.push(names[i]);
      }
    }
  
    
    if (winners.length < 11) {
      let remainingNames = names.filter((name) => !winners.includes(name));
      let neededCount = 11 - winners.length;
  
      
      while (neededCount > 0 && remainingNames.length > 0) {
        let randomIndex = Math.floor(Math.random() * remainingNames.length);
        let randomWinner = remainingNames.splice(randomIndex, 1)[0]; 
  
        if (randomWinner && !winners.includes(randomWinner)) {
          winners.push(randomWinner);
          neededCount--;
        }
      }
    }
  
    return winners;
  }
  



  /*
function lottery(names) {
  // Get the first 5 winners
  let winners = names.slice(0, 5);

  // Add every 10th name starting from the 10th
  winners = winners.concat(names.filter((_, index) => index % 10 === 9 && !winners.includes(names[index])));

  // If we still need more winners, pick random names from the remaining ones
  if (winners.length < 11) {
    let remainingNames = names.filter((name) => !winners.includes(name));
    let neededCount = 11 - winners.length;

    // Recursive function to select random winners
    const selectRandomWinners = (remaining, count) => {
      if (count === 0 || remaining.length === 0) return [];

      let randomIndex = Math.floor(Math.random() * remaining.length);
      let [randomWinner] = remaining.splice(randomIndex, 1);

      return [randomWinner].concat(selectRandomWinners(remaining, count - 1));
    };

    winners = winners.concat(selectRandomWinners(remainingNames, neededCount));
  }

  return winners;
}

  */