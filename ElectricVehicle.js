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
  
