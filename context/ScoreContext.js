import { createContext, useEffect, useState } from 'react';
const defaultState = {
  score: 0,
  adjustScore: () => {},
  highScore: 0,
};

const ScoreContext = createContext(defaultState);

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState();
  const [highScore, setHighScore] = useState();

  useEffect(() => {
    const lsScore = localStorage.getItem('score') || 0;
    setScore(() => JSON.parse(lsScore));
    setHighScore(localStorage.getItem('highScore') || 0);
  }, []);

  const adjustScore = (increase = true) => {
    if (!increase) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('highScore', JSON.stringify(score));
      }
      localStorage.setItem('score', JSON.stringify(0));
      setScore(0);
      return;
    }
    localStorage.setItem('score', JSON.stringify(score + 1));
    setScore((prev) => prev + 1);
  };

  return (
    <ScoreContext.Provider value={{ score, adjustScore, highScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
export { ScoreProvider };
