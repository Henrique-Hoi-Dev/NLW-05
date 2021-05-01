import Header from '../components/Header';
import Player from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';

import '../styles/global.scss'
import Styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
 return (
    <PlayerContextProvider>
        <div className={Styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
    </PlayerContextProvider>  
  );
}

export default MyApp
