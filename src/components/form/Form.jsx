import {
  expenseCategories,
  incomeCategories,
} from "../../category-list/categoryList";
import InputField from "./InputField";
import TabButton from "./TabButton";

const Form = ({
  tab,
  onTabChange,
  onFormChange,
  onFormSubmit,
  singleIncomeStatement,
  singleExpenseStatement,
  isAdd,
}) => {
  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form onSubmit={(e) => onFormSubmit(e, isAdd)}>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <TabButton tabName="expense" tab={tab} onTabChange={onTabChange} />
          <TabButton tabName="income" tab={tab} onTabChange={onTabChange} />
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
              onChange={(e) => {
                onFormChange(e);
              }}
              value={
                tab === "expense"
                  ? singleExpenseStatement.category
                  : singleIncomeStatement.category
              }
              required
            >
              {(tab === "expense" ? expenseCategories : incomeCategories).map(
                (singleCategory) => (
                  <option key={singleCategory.id} value={singleCategory.name}>
                    {singleCategory.name}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div className="mt-3">
          {/* Amount field */}
          {/* Creating issue for getting state data dynamically for income/expense and that's why didn't use component */}
          <InputField
            name={tab === "expense" ? "expense" : "income"}
            type="number"
            classNames="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            placeholder="12931"
            onFormChange={onFormChange}
            tab={tab}
            singleIncomeStatement={singleIncomeStatement}
            singleExpenseStatement={singleExpenseStatement}
          />
        </div>

        <div className="mt-3">
          {/* date field */}
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              placeholder="12931"
              value={
                tab === "expense"
                  ? singleExpenseStatement.date
                  : singleIncomeStatement.date
              }
              onChange={(e) => {
                onFormChange(e);
              }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
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
