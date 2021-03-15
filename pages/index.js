import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { DarkModeToggle } from 'tailwind-darkmode-toggle';
import DisplayWinner from '../components/DisplayWinner';
import GameBoard from '../components/GameBoard';
import GameModeToggle from '../components/GameModeToggle';
import Modal from '../components/Modal';
import RPS from '../components/RPS';
import Rules from '../components/Rules';
import ScoreContext from '../context/ScoreContext';

export default function Home() {
  const { score, adjustScore, highScore } = useContext(ScoreContext);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerChoice, setPlayerChoice] = useState();
  const [aiChoice, setAiChoice] = useState();
  const [showModal, setShowModal] = useState(false);
  const [bonusMode, setBonusMode] = useState();

  useEffect(() => {
    const lsBonusMode = localStorage.getItem('bonusMode') || false;
    setBonusMode(() => JSON.parse(lsBonusMode));
  }, []);

  const toggleMode = () => {
    localStorage.setItem('bonusMode', JSON.stringify(!bonusMode));
    setBonusMode(() => !bonusMode);
  };
  const simple = ['paper', 'scissors', 'rock'];
  const bonus = ['scissors', 'spock', 'paper', 'lizard', 'rock'];

  function handleSelection(e) {
    setGameStarted(true);
    setPlayerChoice(() => e.target.dataset.hand);
    handleAiSelection();
  }

  function handleAiSelection() {
    const choices = bonusMode ? bonus : simple;

    setAiChoice(() => choices[0]);

    let i = 1;

    const shuffle = setInterval(() => {
      setAiChoice(() => choices[i % 3]);
      i++;
    }, 100);

    setTimeout(() => {
      const randomChoice = Math.round(Math.random() * 2);
      setAiChoice(() => choices[randomChoice]);
      clearInterval(shuffle);
      gameEnded();
    }, 2000);
  }

  function playAgain() {
    setGameStarted(false);
    setGameOver(false);
  }

  function gameEnded() {
    const middle = document.querySelector('.middle');
    middle.classList.add('expanded');
    setGameOver(true);
  }

  return (
    <div className='flex flex-col px-4 font-barlow text-neutral-dark dark:text-white'>
      <Head>
        <title>Rock, Paper, Scissors!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='container flex justify-between mx-auto my-12'>
        <div className='flex justify-between w-full h-32 px-4 py-5 m-auto border-4 border-neutral-header rounded-2xl md:w-110'>
          <div className='self-center flex-grow mr-auto md:flex-grow-0'>
            <img
              src='/logo.svg'
              className={`max-h-24 ${bonusMode ? 'hidden' : 'block'}`}
            />
            <img
              src='/logo-bonus.svg'
              className={`max-h-24 ${!bonusMode ? 'hidden' : 'block'}`}
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <GameModeToggle
              className='hidden w-6 h-6 cursor-pointer fill-current sm:block hover:text-rock-light'
              bonusMode={bonusMode}
              toggle={toggleMode}
            />
            <DarkModeToggle className='self-center hidden w-10 h-10 cursor-pointer sm:block' />
          </div>
          <div className='flex flex-col items-center justify-center px-8 py-2 ml-6 rounded-lg bg-neutral-dark sm:px-10 dark:bg-white'>
            <div className='text-xs font-bold tracking-wider text-gray-400 uppercase sm:tracking-widest sm:text-xl dark:text-neutral-score'>
              Score
            </div>
            <div className='text-5xl font-bold text-white sm:text-6xl dark:text-neutral-dark'>
              {score && <>{score}</>}
            </div>
          </div>
        </div>
      </header>

      <main className='container flex-1 mx-auto md:mt-8'>
        {!gameStarted ? (
          <GameBoard
            handleSelection={handleSelection}
            hands={!bonusMode ? simple : bonus}
            gameMode={bonusMode}
          />
        ) : (
          <div className='flex flex-wrap justify-center md:flex-nowrap'>
            <div className='flex flex-col justify-center flex-grow order-1'>
              <div className='order-last mt-6 text-base tracking-wider text-center uppercase md:font-bold md:order-first md:mb-16 md:tracking-widest md:text-xl'>
                You picked
              </div>
              <RPS
                size='large'
                hand={playerChoice && playerChoice}
                player='player'
              />
            </div>
            <div className='flex flex-col justify-center order-last middle md:order-2'>
              {gameOver && (
                <>
                  <div className='mt-12 mb-6 text-5xl font-bold text-center uppercase md:mt-0'>
                    <DisplayWinner
                      playerChoice={playerChoice && playerChoice}
                      aiChoice={aiChoice && aiChoice}
                    />
                  </div>

                  <button
                    className='w-full p-3 font-bold text-center uppercase bg-white rounded-lg md:tracking-widest text-neutral-dark hover:text-rock-light'
                    onClick={playAgain}
                    aria-label='play again'
                  >
                    Play again
                  </button>
                </>
              )}
            </div>
            <div className='flex flex-col justify-center flex-grow order-3'>
              <div className='order-last mt-6 text-base tracking-wider text-center uppercase md:font-bold md:order-first md:mb-16 md:tracking-widest md:text-xl'>
                The house picked
              </div>
              <RPS size='large' hand={aiChoice && aiChoice} player='ai' />
            </div>
          </div>
        )}
      </main>

      <footer className='container flex flex-col items-center justify-end mx-auto my-12 md:flex-row'>
        <div className='flex justify-items-center'>
          <button
            className='px-8 py-2 mx-auto font-bold tracking-widest uppercase border border-current rounded-lg hover:border-rock-light hover:text-rock-light'
            onClick={() => setShowModal(true)}
            data-type='modal-button'
          >
            Rules
          </button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title='Rules'
          >
            <Rules className='w-full h-full' gameMode={bonusMode} />
          </Modal>
        </div>
        <div className='flex items-center justify-between w-1/2 md:hidden'>
          <GameModeToggle
            className='self-center block w-10 h-10 mt-6 cursor-pointer fill-current sm:hidden hover:text-rock-light'
            bonusMode={bonusMode}
            toggle={toggleMode}
          />
          <DarkModeToggle className='self-center block w-10 h-10 mt-6 sm:hidden' />
        </div>
        <div className='order-last mx-auto mt-6 text-center text-neutral-dark md:ml-0 md:mr-auto md:order-first md:mt-0 lg:w-110 md:text-left dark:text-white'>
          <p>
            Challenge by{' '}
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
            >
              Frontend Mentor
            </a>
            .
          </p>
          <p>
            Coded by{' '}
            <a
              href='https://github.com/dcazrael'
              rel='noreferrer'
              className='hover:text-rock-light'
            >
              Michael Sachdev
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
