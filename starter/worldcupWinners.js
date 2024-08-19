const kazananlar = (worldCup) => {
    const isFinal = (match) => match['Stage'] === 'Final';
  
    const finals = worldCup.filter(isFinal);
  
    let winners = [];
  
    finals.forEach((match) => {
      if (match['Home Team Goals'] > match['Away Team Goals']) {
        winners.push(`${match['Year']} kazananı ${match['Home Team Name']}`);
      } else {
        winners.push(`${match['Year']} kazananı ${match['Away Team Name']}`);
      }
    });
  
    return winners;
  };