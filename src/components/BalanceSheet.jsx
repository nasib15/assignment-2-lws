const BalanceSheet = ({ sheet }) => {
  const Balance = ({ amount, description }) => {
    return (
      <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
        <dt className="text-base leading-7 text-gray-600">{description}</dt>
        <dd
          className={`order-first text-xl font-semibold tracking-tight  sm:text-3xl ${
            amount < 0 ? "text-red-700" : "text-gray-700"
          }`}
        >
          BDT {amount}
        </dd>
      </div>
    );
  };

  const totalIncome = sheet.reduce((acc, curr) => acc + (curr.income || 0), 0);
  const totalExpense = sheet.reduce(
    (acc, curr) => acc + (curr.expense || 0),
    0
  );

  console.log(sheet);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <Balance amount={totalIncome - totalExpense} description="Balance" />
          <Balance amount={totalIncome} description="Total Income" />
          <Balance amount={totalExpense} description="Total Expense" />
        </dl>
      </div>
    </div>
  );
};
export default BalanceSheet;
