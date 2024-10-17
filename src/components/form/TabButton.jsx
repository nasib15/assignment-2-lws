const TabButton = ({ tab, tabName, onTabChange }) => {
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
export default TabButton;
