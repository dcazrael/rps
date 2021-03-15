import { useContext, useEffect } from 'react';
import ScoreContext from '../context/ScoreContext';

const DisplayWinner = ({ playerChoice, aiChoice }) => {
  const { score, adjustScore } = useContext(ScoreContext);
  const winConditions = {
    rock: {
      scissors: 'crushes',
      lizard: 'crushes',
    },
    paper: {
      rock: 'covers',
      spock: 'disproves',
    },
    scissors: {
      paper: 'cuts',
      lizard: 'decapitates',
    },
    lizard: {
      paper: 'eats',
      spock: 'poisons',
    },
    spock: {
      scissors: 'smashes',
      rock: 'vaporizes',
    },
  };

  const draw = playerChoice === aiChoice;
  const playerWon = aiChoice in winConditions[playerChoice];

  useEffect(() => {
    if (!playerChoice || draw) return;
    addWinnerHighlight(playerWon);
    if (playerWon) {
      adjustScore();
      return;
    }
    adjustScore(false);
  }, [playerWon]);

  function addWinnerHighlight(playerWon) {
    const winner = playerWon ? 'player' : 'ai';
    const winnerButton = document.querySelector(`[data-player="${winner}"]`);
    winnerButton.classList.add('won');
    return;
  }

  return <div>{draw ? 'Draw' : playerWon ? 'You win' : 'You lose'}</div>;
};

export default DisplayWinner;
