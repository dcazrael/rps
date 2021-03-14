import Head from 'next/head';
import { useContext, useState } from 'react';
import { DarkModeToggle } from 'tailwind-darkmode-toggle';
import DisplayWinner from '../components/DisplayWinner';
import RPS from '../components/rps';
import ScoreContext from '../context/ScoreContext';

export default function Home() {
  const { score, adjustScore, highScore } = useContext(ScoreContext);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerChoice, setPlayerChoice] = useState();
  const [aiChoice, setAiChoice] = useState();

  async function handleSelection(e) {
    setGameStarted(true);
    setPlayerChoice(e.target.dataset.hand);
    await handleAiSelection();
  }

  function handleAiSelection() {
    const choices = ['rock', 'paper', 'scissors'];

    let i = 0;
    let shuffle = setInterval(() => {
      setAiChoice(choices[i % 3]);
      i++;
    }, 100);
    setTimeout(() => {
      const randomChoice = Math.round(Math.random() * 2);
      setAiChoice(choices[randomChoice]);
      clearInterval(shuffle);
      gameEnded();
    }, 2000);
  }

  function playAgain() {
    setGameStarted(false);
    setGameOver(false);
  }

  function gameEnded() {
    setGameOver(true);
  }

  return (
    <div className='flex flex-col w-screen h-screen font-barlow'>
      <Head>
        <title>Rock, Paper, Scissors!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='container flex justify-between mx-auto my-12'>
        <div className='flex justify-between px-8 py-5 m-auto text-gray-700 border-4 border-neutral-header rounded-2xl dark:text-white w-110'>
          <div className='flex-col flex-1 text-5xl font-bold leading-10 uppercase'>
            <div>Rock</div>
            <div>Paper</div>
            <div>Scissors</div>
          </div>
          <DarkModeToggle className='self-center w-10 h-10 text-gray-700 dark:text-white' />
          <div className='flex flex-col items-center justify-center px-10 ml-6 bg-gray-700 rounded-lg dark:bg-white'>
            <div className='text-xl font-bold tracking-widest text-gray-400 uppercase dark:text-neutral-score'>
              Score
            </div>
            <div className='text-6xl font-bold text-white dark:text-neutral-dark'>
              {score && <>{score}</>}
            </div>
          </div>
        </div>
      </header>

      <main className='container flex-1 mx-auto mt-8'>
        {!gameStarted ? (
          <div className='flex justify-center gap-12'>
            <div className='justify-center'>
              <RPS hand='paper' handleSelection={(e) => handleSelection(e)} />
            </div>
            <div className='justify-center'>
              <RPS
                hand='scissors'
                handleSelection={(e) => handleSelection(e)}
              />
            </div>
            <div className='justify-center col-span-3'>
              <RPS hand='rock' handleSelection={(e) => handleSelection(e)} />
            </div>
          </div>
        ) : (
          <div className='flex justify-center'>
            <div className='justify-center flex-grow'>
              <div className='text-xl font-bold tracking-widest text-center text-white uppercase'>
                You picked
              </div>
              <RPS hand={playerChoice} />
            </div>
            <div className='justify-center'>
              {gameOver && (
                <>
                  <div className='mb-6 text-5xl font-bold text-center text-white uppercase'>
                    <DisplayWinner
                      playerChoice={playerChoice}
                      aiChoice={aiChoice}
                    />
                  </div>

                  <button
                    className='w-full p-3 font-bold tracking-widest text-center uppercase bg-white rounded-lg dark:text-neutral-dark dark:hover:text-rock-light'
                    onClick={playAgain}
                    aria-label='play again'
                  >
                    Play again
                  </button>
                </>
              )}
            </div>
            <div className='justify-center flex-grow'>
              <div className='text-xl font-bold tracking-widest text-center text-white uppercase'>
                The house picked
              </div>
              <RPS hand={aiChoice} />
            </div>
          </div>
        )}
        <h2 className='mb-10 text-xl text-gray-700 dark:text-white'></h2>
      </main>

      <footer className='container mx-auto my-12 w-110'>
        <p className='text-gray-700 dark:text-white'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by <a href='#'>Your Name Here</a>.
        </p>
      </footer>
    </div>
  );
}
