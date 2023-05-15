import { LibraryItem } from '../LibraryItem';

import './styles.css';

const LibraryList = ({ playlists }) => (
  <section className="library-list">
    {playlists.map((playlist, index) => (
      <LibraryItem
        key={index}
        title={playlist.title}
        isPlaying={playlist.isPlaying}
      />
    ))}
  </section>
);

export { LibraryList };
