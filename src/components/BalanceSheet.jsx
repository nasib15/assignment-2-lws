const BalanceSheet = () => {
  const Balance = ({ amount, description }) => {
    return (
      <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
        <dt className="text-base leading-7 text-gray-600">{description}</dt>
        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
          BDT {amount}
        </dd>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <Balance amount={20000} description="Balance" />
          <Balance amount={20000} description="Total Income" />
          <Balance amount={20000} description="Total Expense" />
        </dl>
      </div>
    </div>
  );
};
export default BalanceSheet;
