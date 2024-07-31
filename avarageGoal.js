const { fifaData } = require('./fifa.js');

const ortalamaGol = (worldCup) => {
  const totalGoals = worldCup.reduce((total, match) => {
    return total + match['Home Team Goals'] + match['Away Team Goals'];
  }, 0);

  let average = (totalGoals / worldCup.length).toFixed(2);
  return average;
};