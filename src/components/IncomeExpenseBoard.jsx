import { useState } from "react";
import Form from "./form/Form";
import RightSideColumn from "./RightSideColumn";

const IncomeExpenseBoard = () => {
  const [tab, setTab] = useState("expense");

  const incomeObject = {
    id: crypto.randomUUID(),
    tab: "income",
    category: "Salary",
    income: 0,
    date: "",
  };

  const expenseObject = {
    id: crypto.randomUUID(),
    tab: "expense",
    category: "Education",
    expense: 0,
    date: "",
  };

  const balanceSheet = [
    {
      id: crypto.randomUUID(),
      tab: "income",
      category: "Salary",
      income: 1000,
      date: "2024-08-27",
    },
  ];

  const [incomeSheet, setIncomeSheet] = useState(incomeObject);
  const [expenseSheet, setExpenseSheet] = useState(expenseObject);
  const [sheet, setSheet] = useState(balanceSheet);

  //    const options = { day: 'numeric', month: 'long', year: 'numeric' };
  // const formattedDate = dateObj.toLocaleDateString('en-GB', options);

  const handleTabChange = (e) => {
    if (tab === "income") {
      setIncomeSheet(incomeSheet);
      setTab(e.target.textContent.toLowerCase());
    }
    if (tab === "expense") {
      setExpenseSheet(expenseSheet);
      setTab(e.target.textContent.toLowerCase());
    }
  };

  const handleForm = (e) => {
    const category = e.target.name;
    let value = e.target.value;
    if (tab === "income") {
      if (category === "amount") {
        setIncomeSheet({ ...incomeSheet, income: parseInt(value) });
      } else setIncomeSheet({ ...incomeSheet, [category]: value });
    }
    if (tab === "expense") {
      if (category === "amount") {
        setExpenseSheet({ ...expenseSheet, expense: parseInt(value) });
      } else setExpenseSheet({ ...expenseSheet, [category]: value });
    }
  };
  // console.log(incomeSheet, expenseSheet);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newData = tab === "income" ? incomeSheet : expenseSheet;

    // Adding new data to the balance sheet
    setSheet([...sheet, newData]);
  };

  // console.log(sheet);

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <Form
          tab={tab}
          onTabChange={handleTabChange}
          onFormChange={handleForm}
          incomeSheet={incomeSheet}
          expenseSheet={expenseSheet}
          onFormSubmit={handleFormSubmit}
        />
        {/* Right column */}
        <RightSideColumn sheet={sheet} />
      </section>
    </main>
  );
};
export default IncomeExpenseBoard;
