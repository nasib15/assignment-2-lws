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
    console.log(name);
    if (name === "income") {
      console.log(singleIncomeStatement[name]);
      return singleIncomeStatement[name];
    } else if (name === "expense") {
      console.log(singleExpenseStatement[name]);
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
          value={getValue()}
          required
        />
      </div>
    </>
  );
};
export default InputField;
