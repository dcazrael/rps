import RPS from '../components/RPS';

const GameBoard = ({ handleSelection, hands, gameMode }) => {
  return !gameMode ? (
    <div className='grid grid-cols-2 p-4 mx-auto bg-center bg-50% md:bg-auto bg-no-repeat gap-y-8 md:gap-y-20 w-full md:w-110 place-items-center bg-triangle'>
      {hands.map((hand, index) => {
        return (
          <div
            className={`justify-center ${index === 2 ? 'col-span-2' : ''}`}
            key={hand}
          >
            <RPS
              size='medium'
              hand={hand}
              handleSelection={(e) => handleSelection(e)}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div className='grid grid-cols-2 p-4 mx-auto bg-center grid-rows-1-1.2-1 md:grid-rows-1-1.5-1 bg-50% md:bg-75% bg-no-repeat md:gap-y-4 gap-x-10 md:gap-x-24 w-full md:w-110 place-items-center bg-pentagon'>
      {hands.map((hand, index) => {
        const classes = [
          'justify-center col-span-2',
          'justify-self-start self-start',
          'justify-self-end self-start',
          'justify-self-end',
          'justify-self-start',
        ];
        return (
          <div className={`${classes[index]}`} key={hand}>
            <RPS
              size='medium'
              hand={hand}
              handleSelection={(e) => handleSelection(e)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
