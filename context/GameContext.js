import { createContext, useEffect, useState } from 'react';
const defaultState = {
  gameMode: 'simple',
  toggleMode: () => {},
};

const GameContext = createContext(defaultState);

const GameProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState();

  useEffect(() => {
    const lsGameMode = localStorage.getItem('gameMode') || 'simple';
    setGameMode(() => JSON.parse(lsGameMode));
  }, []);

  const toggleMode = () => {
    const nextGameMode = gameMode === 'simple' ? 'bonus' : 'simple';
    localStorage.setItem('score', JSON.stringify(nextGameMode));
    setGameMode(() => nextGameMode);
  };

  return (
    <GameContext.Provider value={{ gameMode, toggleMode }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
export { GameProvider };
