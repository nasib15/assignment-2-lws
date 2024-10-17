import { useState } from "react";
import BalanceSheet from "./BalanceSheet";
import Statement from "./Statement";
import { ExpenseSVG, IncomeSVG } from "./SVG";

const RightSideColumn = ({ sheet }) => {
  const [isIncomeFilterOpen, setIsIncomeFilterOpen] = useState(false);
  const [isIncomeSortOpen, setIsIncomeSortOpen] = useState(false);
  const [isExpenseFilterOpen, setIsExpenseFilterOpen] = useState(false);
  const [isExpenseSortOpen, setIsExpenseSortOpen] = useState(false);

  // hide all the other menus when one is clicked
  const handleIncomeFilter = () => {
    setIsIncomeFilterOpen(!isIncomeFilterOpen);
    setIsIncomeSortOpen(false);
    setIsExpenseFilterOpen(false);
    setIsExpenseSortOpen(false);
  };

  const handleIncomeSort = () => {
    setIsIncomeSortOpen(!isIncomeSortOpen);
    setIsIncomeFilterOpen(false);
    setIsExpenseFilterOpen(false);
    setIsExpenseSortOpen(false);
  };

  const handleExpenseFilter = () => {
    setIsExpenseFilterOpen(!isExpenseFilterOpen);
    setIsExpenseSortOpen(false);
    setIsIncomeFilterOpen(false);
    setIsIncomeSortOpen(false);
  };

  const handleExpenseSort = () => {
    setIsExpenseSortOpen(!isExpenseSortOpen);
    setIsExpenseFilterOpen(false);
    setIsIncomeFilterOpen(false);
    setIsIncomeSortOpen(false);
  };

  return (
    <div className="lg:col-span-2">
      <BalanceSheet sheet={sheet} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <Statement
          svg={<IncomeSVG />}
          type={"Income"}
          bg={"bg-teal-600"}
          isIncomeFilterOpen={isIncomeFilterOpen}
          isIncomeSortOpen={isIncomeSortOpen}
          onIncomeSort={handleIncomeSort}
          onIncomeFilter={handleIncomeFilter}
        />
        <Statement
          svg={<ExpenseSVG />}
          type={"Expense"}
          bg={"bg-red-600"}
          isExpenseFilterOpen={isExpenseFilterOpen}
          isExpenseSortOpen={isExpenseSortOpen}
          onExpenseSort={handleExpenseSort}
          onExpenseFilter={handleExpenseFilter}
        />
      </div>
    </div>
  );
};
export default RightSideColumn;
