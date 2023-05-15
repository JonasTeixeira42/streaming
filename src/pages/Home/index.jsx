import { Player } from '../../components/Player';
import { Sidebar } from '../../components/Sidebar';
import { Profile } from '../../components/Profile';
import { TopSongs } from '../../components/TopSongs';

import './styles.css';

const Home = () => (
  <main className="home">
    <section className="home__content">
      <Sidebar />
      <Profile />
      <TopSongs />
    </section>
    <section className="home__player">
      <Player />
    </section>
  </main>
);

export { Home };
