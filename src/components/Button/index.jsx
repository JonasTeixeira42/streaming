import './styles.css';

const Button = ({ children }) => (
  <button className="button" type="button">
    <span className="text">{children}</span>
  </button>
);

export { Button };
