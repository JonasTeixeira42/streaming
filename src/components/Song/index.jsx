import './styles.css';

const Song = ({ url, title, artist }) => (
  <article class="song">
    <div className="song-picture">
      <img className="picture" src={url} alt="friend avatar" />
    </div>
    <div className="song-information">
      <h3 className="title">{title}</h3>
      <h4 className="artist">{artist}</h4>
    </div>
  </article>
);

export { Song };
