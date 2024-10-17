const Form = ({ tab, onTabChange }) => {
  const InputField = ({ name, type, classNames, placeholder }) => {
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
          />
        </div>
      </>
    );
  };

  const TabButton = ({ tabName }) => {
    return (
      <div
        className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
          tab === tabName && "active"
        }`}
        onClick={onTabChange}
      >
        {tabName[0].toUpperCase() + tabName.slice(1)}
      </div>
    );
  };

  const expenseCategories = [
    "Education",
    "Food",
    "Health",
    "Bill",
    "Insurance",
    "Tax",
    "Transport",
    "Telephone",
  ];

  const incomeCategories = ["Salary", "Outsourcing", "Bond", "Dividend"];

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <TabButton tabName="expense" />
          <TabButton tabName="income" />
        </div>

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              {expenseCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3">
          {/* Amount field */}
          <InputField
            name="amount"
            type="number"
            classNames="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            placeholder="12931"
          />
        </div>

        <div className="mt-3">
          {/* date field */}
          <InputField
            name="date"
            type="date"
            classNames="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            placeholder="12931"
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default Form;
