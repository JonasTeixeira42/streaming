import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { Profile } from '../../components/Profile';
import { FriendsActivity } from '../../components/FriendsActivity';

import './styles.css';

const Home = () => (
  <main class="home">
    <section class="home__content">
      <Sidebar />
      <Profile />
      <FriendsActivity />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export { Home };
