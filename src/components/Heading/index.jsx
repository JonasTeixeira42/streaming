import './styles.css';

const Heading = ({ children, weight = 'heavy' }) => (
  <h1 className={`heading ${weight === 'heavy' ? 'heavy' : 'medium'}`}>
    {children}
  </h1>
);

export { Heading };
