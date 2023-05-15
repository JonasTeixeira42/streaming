import { SongTrack } from '../SongTrack';
import { PlayIcon } from '../icons/PlayIcon';
import { RewindIcon } from '../icons/RewindIcon';
import { ShuffleIcon } from '../icons/ShuffleIcon';
import { BackArrowIcon } from '../icons/BackArrowIcon';
import { ForwardArrowIcon } from '../icons/ForwardArrowIcon';

import './styles.css';

const Controls = () => (
  <div className="controls-wrapper">
    <div className="controls-action">
      <div className="icon">
        <ShuffleIcon />
      </div>
      <div className="icon">
        <BackArrowIcon />
      </div>
      <div className="play">
        <PlayIcon />
      </div>
      <div className="icon">
        <ForwardArrowIcon />
      </div>
      <div className="icon">
        <RewindIcon />
      </div>
    </div>

    <SongTrack initialTime={'0:00'} endingTime={'4:18'} />
  </div>
);

export { Controls };
