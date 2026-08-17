import "./styles.css";

export const FormSelect = ({
  label,
  options = [],
  placeholder = "Все категории",
  name,
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className={`form-field ${className}`.trim()}>
      {label && <label className="form-field__label">{label}</label>}
      <div className="form-field__control-wrapper">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-field__select"
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
