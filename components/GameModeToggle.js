import Bonus from '../src/images/icon-pentagon.svg';
import Simple from '../src/images/icon-triangle.svg';

const GameModeToggle = ({ className, bonusMode, toggle }) => {
  return (
    <>
      {bonusMode ? (
        <Simple className={className} onClick={toggle} />
      ) : (
        <Bonus className={className} onClick={toggle} />
      )}
    </>
  );
};

export default GameModeToggle;
