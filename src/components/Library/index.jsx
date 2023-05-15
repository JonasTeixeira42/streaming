import { AddIcon } from '../icons/AddIcon';
import { LibraryList } from '../LibraryList';
import { LibraryIcon } from '../icons/LibraryIcon';

import { playlists } from './playlists';

import './styles.css';

const Library = () => (
  <section class="library">
    <div class="header">
      <div class="header__icon">
        <LibraryIcon />
      </div>
      <span class="header__title">Your Library</span>
      <div class="header__add">
        <AddIcon />
      </div>
    </div>
    <div className="playlist">
      <LibraryList playlists={playlists} />
    </div>
  </section>
);

export { Library };
