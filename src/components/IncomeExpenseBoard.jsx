import { useState } from "react";
import Form from "./form/Form";
import RightSideColumn from "./RightSideColumn";

const IncomeExpenseBoard = () => {
  const balanceSheet = {
    category: "",
    amount: 0,
    date: "",
  };

  const [tab, setTab] = useState("expense");
  const [category, setCategory] = useState("");
  const [sheet, setSheet] = useState(balanceSheet);

  //    const options = { day: 'numeric', month: 'long', year: 'numeric' };
  // const formattedDate = dateObj.toLocaleDateString('en-GB', options);

  const handleTabChange = (e) => {
    setTab(e.target.textContent.toLowerCase());
  };

  const handleForm = (e) => {
    const category = e.target.name;
    let value = e.target.value;
    console.log(category, value);
    setSheet({ ...sheet, [category]: value });
  };

  console.log(sheet);

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <Form
          tab={tab}
          onTabChange={handleTabChange}
          // onCategoryChange={handleCategoryChange}
          onFormChange={handleForm}
        />
        {/* Right column */}
        <RightSideColumn />
      </section>
    </main>
  );
};
export default IncomeExpenseBoard;
