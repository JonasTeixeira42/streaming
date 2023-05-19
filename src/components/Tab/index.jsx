import './styles.css';

const Tab = ({ id, isChecked, icon, children }) => (
  <div className="tab">
    <input
      id={id}
      name="tabs"
      type="radio"
      className="radio"
      defaultChecked={isChecked}
    />
    <label className="tab-label" htmlFor={id}>
      <div className="icon">{icon}</div>
      {children}
    </label>
  </div>
);

export { Tab };
