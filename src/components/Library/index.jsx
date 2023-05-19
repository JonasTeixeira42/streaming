import { AddIcon } from '../icons/AddIcon';
import { LibraryList } from '../LibraryList';
import { LibraryIcon } from '../icons/LibraryIcon';

import { playlists } from './playlists';

import './styles.css';

const Library = () => (
  <section className="library">
    <div className="header">
      <div className="icon">
        <LibraryIcon />
      </div>
      <span className="title">Your Library</span>
      <div className="add">
        <AddIcon />
      </div>
    </div>
    <div className="playlist">
      <LibraryList playlists={playlists} />
    </div>
  </section>
);

export { Library };
