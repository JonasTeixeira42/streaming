import { SongList } from '../SongList';

import { songs } from './songs';

import './styles.css';

const TopSongs = () => (
  <aside class="top-songs">
    <h2 className="title">Top Streams Real-Time</h2>
    <SongList songs={songs} />
  </aside>
);

export { TopSongs };
