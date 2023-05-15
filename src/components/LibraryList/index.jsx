import { LibraryItem } from '../LibraryItem';

import './styles.css';

const LibraryList = ({ playlists }) => (
  <section class="library-list">
    {playlists.map((playlist) => (
      <LibraryItem title={playlist.title} isPlaying={playlist.isPlaying} />
    ))}
  </section>
);

export { LibraryList };
