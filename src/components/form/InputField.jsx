const InputField = ({
  name,
  type,
  classNames,
  placeholder,
  onFormChange,
  tab,
  singleIncomeStatement,
  singleExpenseStatement,
}) => {
  const getValue = () => {
    if (name === "income") {
      return singleIncomeStatement[name];
    } else if (name === "expense") {
      return singleExpenseStatement[name];
    }
  };

  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name[0].toUpperCase() + name.slice(1)}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          autoComplete="off"
          placeholder={placeholder}
          className={classNames}
          onChange={(e) => {
            onFormChange(e);
          }}
          value={
            name === "date"
              ? singleIncomeStatement[name] || singleExpenseStatement[name]
              : getValue()
          }
          required
        />
      </div>
    </>
  );
};
export default InputField;
