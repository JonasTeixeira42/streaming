import './styles.css';

const Playlist = ({ url, title, description }) => (
  <article className="playlist-wrapper">
    <div className="image-wrapper">
      <img className="image" src={url} alt="playlist description" />
    </div>
    <div className="playlist-info">
      <h3 className="title">{title}</h3>
      <h4 className="description">{description}</h4>
    </div>
  </article>
);

export { Playlist };
