import { useState } from "react";
import Form from "./Form";
import RightSideColumn from "./RightSideColumn";

const IncomeExpenseBoard = () => {
  const [tab, setTab] = useState("expense");

  const handleTabChange = (e) => {
    setTab(e.target.textContent.toLowerCase());
  };

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <Form tab={tab} onTabChange={handleTabChange} />
        {/* Right column */}
        <RightSideColumn />
      </section>
    </main>
  );
};
export default IncomeExpenseBoard;
