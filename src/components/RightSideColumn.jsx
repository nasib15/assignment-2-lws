import BalanceSheet from "./BalanceSheet";
import Statement from "./Statement";
import { ExpenseSVG, IncomeSVG } from "./SVG";

const RightSideColumn = () => {
  return (
    <div className="lg:col-span-2">
      <BalanceSheet />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <Statement svg={<IncomeSVG />} type={"Income"} bg={"bg-teal-600"} />
        <Statement svg={<ExpenseSVG />} type={"Expense"} bg={"bg-red-600"} />
      </div>
    </div>
  );
};
export default RightSideColumn;
