import RulesBonus from '../src/images/image-rules-bonus.svg';
import RulesSimple from '../src/images/image-rules.svg';

const Rules = ({ className, gameMode }) => {
  console.log(gameMode);
  return (
    <>
      {!gameMode ? (
        <RulesSimple className={className} />
      ) : (
        <RulesBonus className={className} />
      )}
    </>
  );
};

export default Rules;
