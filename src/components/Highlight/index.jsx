import './styles.css';

const Highlight = ({ url, quantity, title, subtitle }) => (
  <div className="highlight">
    <img className="image" src={url} alt="highligh playlist" />
    <p className="quantity">{quantity} tracks</p>
    <div className="highlight-info">
      <h3 className="title">{title}</h3>
      <h4 className="subtitle">{subtitle}</h4>
    </div>
  </div>
);

export { Highlight };
