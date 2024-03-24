function FormRowSelect({ name, labelText, list, defaultValue = "" }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className={"form-label"}>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className={"form-select"}
        defaultValue={defaultValue}
      >
        {list.map((job) => (
          <option key={job} value={job}>
            {job}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormRowSelect;
