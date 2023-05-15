import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { Profile } from '../../components/Profile';
import { TopSongs } from '../../components/TopSongs';

import './styles.css';

const Home = () => (
  <main class="home">
    <section class="home__content">
      <Sidebar />
      <Profile />
      <TopSongs />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export { Home };
