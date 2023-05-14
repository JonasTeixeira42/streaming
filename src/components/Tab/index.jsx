import './styles.css';

const Tab = ({ id, isChecked, icon, children }) => (
  <div className="tab">
    <input
      id={id}
      name="tabs"
      type="radio"
      className="tab__radio"
      defaultChecked={isChecked}
    />
    <label className="tab__label" htmlFor={id}>
      <div className="tab__label__icon">{icon}</div>
      {children}
    </label>
  </div>
);

export { Tab };
