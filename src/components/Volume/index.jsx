import { Track } from '../Track';
import { VolumeIcon } from '../icons/VolumeIcon';

import './styles.css';

const Volume = () => (
  <div className="volume-wrapper">
    <div className="icon">
      <VolumeIcon />
    </div>
    <div className="volume">
      <Track />
    </div>
  </div>
);

export { Volume };
