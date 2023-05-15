import { Button } from '../Button';
import { DotsIcon } from '../icons/DotsIcon';
import { FavoriteIcon } from '../icons/FavoriteIcon';

import './styles.css';

const Banner = ({ url, title, artist, description }) => (
  <div class="banner">
    <div className="banner-image">
      <img className="image" src={url} alt="featured song" />
    </div>

    <div className="featured-info">
      <p className="description">{description}</p>
      <h2 className="artist">{artist}</h2>
      <h3 className="title">{title}</h3>
    </div>

    <div className="banner-action">
      <div className="icon">
        <DotsIcon />
      </div>
      <div className="icon">
        <FavoriteIcon />
      </div>
      <Button>Play</Button>
    </div>
  </div>
);

export { Banner };
