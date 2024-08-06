import '../styles/globals.css';
import { SessionProvider } from '../context/SessionContext';
import { TextProvider } from '../context/TextContext';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <TextProvider>
        <Component {...pageProps} />
      </TextProvider>
    </SessionProvider>
  );
}

export default MyApp;
