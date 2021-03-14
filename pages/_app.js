import { ThemeProvider } from 'tailwind-darkmode-toggle';
import { ScoreProvider } from '../context/ScoreContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ScoreProvider>
        <Component {...pageProps} />
      </ScoreProvider>
    </ThemeProvider>
  );
}

export default MyApp;
