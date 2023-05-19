import { Player } from './components/Player';
import { Sidebar } from './components/Sidebar';
import { Profile } from './components/Profile';
import { TopSongs } from './components/TopSongs';

import './app.css';

const App = () => (
  <main className="home">
    <section className="content">
      <Sidebar />
      <Profile />
      <TopSongs />
    </section>
    <section>
      <Player />
    </section>
  </main>
);

export { App };
