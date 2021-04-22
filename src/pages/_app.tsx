import Header from '../components/Header';
import Player from '../components/Player';

import '../styles/global.scss'
import Styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
       <div className={Styles.wrapper}>
         <main>
          <Header />
          <Component {...pageProps} />
         </main>
        <Player />
      </div>
  );
}

export default MyApp
