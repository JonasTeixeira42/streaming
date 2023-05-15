import { Library } from '../Library';
import { Navigation } from '../Navigation';

import './styles.css';

const Sidebar = () => (
  <aside className="sidebar">
    <Navigation />
    <Library />
  </aside>
);

export { Sidebar };
