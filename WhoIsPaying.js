const finallerdekiGolSayilari = (worldCup) => {
  
    const finals = worldCup.filter((match) => match['Stage'] === 'Final');
  
    const teamScores = {};
  
    
    finals.forEach((match) => {
      
      const homeKey = match['Home Team Name'];
      const awayKey = match['Away Team Name'];
  
    
      if (teamScores[homeKey]) {
        teamScores[homeKey] += match['Home Team Goals'];
      } else {
        teamScores[homeKey] = match['Home Team Goals'];
      }
  
      if (teamScores[awayKey]) {
        teamScores[awayKey] += match['Away Team Goals'];
      } else {
        teamScores[awayKey] = match['Away Team Goals'];
      }
    });
  
    return teamScores;
  };