import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ThemeScriptTag } from 'tailwind-darkmode-toggle';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta charSet='UTF-8' />
          <ThemeScriptTag />
        </Head>
        <body className='w-screen h-full min-h-screen bg-gradient-radial-center dark:from-neutral-grad-from dark:to-neutral-grad-to from-gray-400 to-gray-200'>
          <Main />
          <NextScript />
          <div id='modal-root'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
