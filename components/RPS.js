import Lizard from '../src/images/icon-lizard.svg';
import Paper from '../src/images/icon-paper.svg';
import Rock from '../src/images/icon-rock.svg';
import Scissors from '../src/images/icon-scissors.svg';
import Spock from '../src/images/icon-spock.svg';

const RPS = ({ hand, handleSelection, player = 'none', size = 'medium' }) => {
  const sizes = {
    small: {
      button: 'w-20 h-20',
      icon: 'w-6 h-6',
      border: 'border-0.5-rem',
    },
    medium: {
      button: 'w-20 h-20 md:w-48 md:h-48',
      icon: 'w-8 h-8 md:w-16 md:h-16',
      border: 'border-0.5-rem md:border-1-rem lg:border-1.5-rem',
    },
    large: {
      button: 'w-28 h-28 md:w-48 md:h-48 lg:w-64 lg:h-64',
      icon: 'w-12 h-12 md:w-24 md:h-24',
      border: 'border-0.75-rem md:border-1.5-rem lg:border-2-rem',
    },
  };

  const iconStyle = `${sizes[size].icon} pointer-events-none fill-current text-white dark:text-neutral-dark`;

  const icon = {
    rock: <Rock className={iconStyle} />,
    paper: <Paper className={iconStyle} />,
    scissors: <Scissors className={iconStyle} />,
    lizard: <Lizard className={iconStyle} />,
    spock: <Spock className={iconStyle} />,
  };
  const colors = {
    scissors: {
      border: 'border-scissors-light dark:border-scissors-lighter',
      shadow: 'shadow-scissors-sm md:shadow-scissors',
    },
    paper: {
      border: 'border-paper-light dark:border-paper-lighter',
      shadow: 'shadow-paper-sm md:shadow-paper',
    },
    rock: {
      border: 'border-rock-light dark:border-rock-lighter',
      shadow: 'shadow-rock-sm md:shadow-rock',
    },
    lizard: {
      border: 'border-lizard-light dark:border-lizard-lighter',
      shadow: 'shadow-lizard-sm md:shadow-lizard',
    },
    spock: {
      border: 'border-spock-light dark:border-spock-lighter',
      shadow: 'shadow-spock-sm md:shadow-spock',
    },
  };
  return (
    <button
      data-hand={hand}
      className={`${sizes[size].button} ${sizes[size].border} ${colors[hand].border} ${colors[hand].shadow} flex items-center justify-center mx-auto bg-neutral-dark dark:bg-white rounded-full`}
      onClick={handleSelection}
      aria-label={`Selection: ${hand}`}
      data-player={player}
    >
      {icon[hand]}
    </button>
  );
};

export default RPS;
