import { Song } from '../Song';
import { Volume } from '../Volume';
import { Controls } from '../Controls';

import './styles.css';

const Player = () => (
  <section className="player">
    <div className="song-playing">
      <Song
        url="https://geo-media.beatport.com/image_size/1400x1400/dfb39b30-0745-4162-9dd3-b48de8a8cea6.jpg"
        title="Jungle"
        artist="Fred Again.."
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
