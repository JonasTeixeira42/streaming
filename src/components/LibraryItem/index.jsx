import { DiscIcon } from '../icons/DiscIcon';

import './styles.css';

const LibraryItem = ({ isPlaying, title }) => (
  <article className="library-item">
    <p className={`title ${isPlaying && 'title-red'}`}>{title}</p>
    {isPlaying && (
      <div className="disc">
        <DiscIcon />
      </div>
    )}
  </article>
);

export { LibraryItem };
