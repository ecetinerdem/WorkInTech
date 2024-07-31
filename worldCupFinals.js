const { fifaData } = require('./fifa.js');

const finaller = (worldCup) => {
  const isFinal = (match) => match['Stage'] === 'Final';

  const finals = worldCup.filter(isFinal);

  let totalGoals = 0;

  finals.forEach((match) => {
    totalGoals += match['Home Team Goals'] + match['Away Team Goals'];
  });

  return `2014 yılına kadar finallerde ${totalGoals} gol atılmıştır.`;
};