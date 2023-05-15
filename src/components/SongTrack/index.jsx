import { Track } from '../Track';

import './styles.css';

const SongTrack = ({ initialTime, endingTime }) => (
  <div className="song-track">
    <span className="time">{initialTime}</span>
    <Track />
    <span className="time">{endingTime}</span>
  </div>
);

export { SongTrack };
