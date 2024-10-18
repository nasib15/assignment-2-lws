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

  const incomeDatasheet = [
    {
      id: crypto.randomUUID(),
      tab: "income",
      category: "Salary",
      income: 1000,
      date: "2024-08-27",
    },
  ];

  const expenseDatasheet = [
    {
      id: crypto.randomUUID(),
      tab: "expense",
      category: "Education",
      expense: 100,
      date: "2024-08-10",
    },
  ];

  // State for the form data based on the tab
  const [singleIncomeStatement, setSingleIncomeStatement] =
    useState(incomeObject);
  const [singleExpenseStatement, setSingleExpenseStatement] =
    useState(expenseObject);

  // Maintaining different datasheets for income and expense
  const [incomeSheet, setIncomeSheet] = useState(incomeDatasheet);
  const [expenseSheet, setExpenseSheet] = useState(expenseDatasheet);

  // Changing the tab on click
  const handleTabChange = (e) => {
    if (tab === "income") {
      setSingleIncomeStatement({
        ...singleIncomeStatement,
        income: 0,
        date: "",
      });
      setTab(e.target.textContent.toLowerCase());
    }
    if (tab === "expense") {
      setSingleExpenseStatement({
        ...singleExpenseStatement,
        expense: 0,
        date: "",
      });
      setTab(e.target.textContent.toLowerCase());
    }
  };

  // Updating the form data on change
  const handleForm = (e) => {
    const category = e.target.name;
    let value = e.target.value;
    if (tab === "income") {
      if (category === "amount") {
        setSingleIncomeStatement({
          ...singleIncomeStatement,
          income: parseInt(value),
        });
      } else
        setSingleIncomeStatement({
          ...singleIncomeStatement,
          [category]: value,
        });
    }
    if (tab === "expense") {
      if (category === "amount") {
        setSingleExpenseStatement({
          ...singleExpenseStatement,
          expense: parseInt(value),
        });
      } else
        setSingleExpenseStatement({
          ...singleExpenseStatement,
          [category]: value,
        });
    }
  };
  // console.log(singleIncomeStatement, singleExpenseStatement);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newData =
      tab === "income" ? singleIncomeStatement : singleExpenseStatement;

    // Adding new data to the balance incomeSheet based on the tab
    if (tab === "income") {
      setIncomeSheet([...incomeSheet, newData]);
      // e.form.reset();
    } else {
      setExpenseSheet([...expenseSheet, newData]);
      // e.form.reset();
    }
  };

  // console.log(incomeSheet);

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <Form
          tab={tab}
          onTabChange={handleTabChange}
          onFormChange={handleForm}
          singleIncomeStatement={singleIncomeStatement}
          singleExpenseStatement={singleExpenseStatement}
          onFormSubmit={handleFormSubmit}
        />
        {/* Right column */}
        <RightSideColumn
          incomeSheet={incomeSheet}
          expenseSheet={expenseSheet}
        />
      </section>
    </main>
  );
};
export default IncomeExpenseBoard;
