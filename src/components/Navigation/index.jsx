import { Tab } from '../Tab';
import { HomeIcon } from '../icons/HomeIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { LibraryIcon } from '../icons/LibraryIcon';
import { FavoriteIcon } from '../icons/FavoriteIcon';

import './styles.css';

const Navigation = () => (
  <div className="navigation">
    <Tab id="home" icon={<HomeIcon />} isChecked={true}>
      Home
    </Tab>
    <Tab id="search" icon={<SearchIcon />}>
      Search
    </Tab>
    <Tab id="favorite" icon={<FavoriteIcon />}>
      Favorite
    </Tab>
    <Tab id="library" icon={<LibraryIcon />}>
      Library
    </Tab>
  </div>
);

export { Navigation };
