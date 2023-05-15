import { Song } from '../Song';

import './styles.css';

const SongList = ({ songs }) => (
  <section className="song-list">
    {songs.map(({ url, title, artist }, index) => (
      <Song key={index} url={url} title={title} artist={artist} />
    ))}
  </section>
);

export { SongList };
