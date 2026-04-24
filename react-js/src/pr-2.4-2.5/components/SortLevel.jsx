export const SortLevel = ({ label, value, onChange, options, disabled }) => {
  return (
    <>
      <label>
        {label}:
        <select
          disabled={disabled}
          value={value.field}
          onChange={(e) => onChange("field", e.target.value)}
        >
          <option value="">Нет выбора</option>
          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label>
        по убыванию?
        <input
          type="checkbox"
          checked={value.desc}
          onChange={(e) => onChange("desc", e.target.checked)}
        />
      </label>
    </>
  );
};