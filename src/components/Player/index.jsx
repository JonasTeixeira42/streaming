import { Song } from '../Song';
import { Volume } from '../Volume';
import { Controls } from '../Controls';

import './styles.css';

const Player = () => (
  <section className="player">
    <div className="song-playing">
      <Song
        url="https://images.unsplash.com/photo-1683971745402-62952a6b8677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        title="aaaa"
        artist="aaaaa"
      />
    </div>
    <div className="controls-player">
      <Controls />
    </div>
    <div className="volume-player">
      <Volume />
    </div>
  </section>
);

export { Player };
