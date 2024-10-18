import { useState } from "react";
import Form from "./form/Form";
import RightSideColumn from "./RightSideColumn";

const IncomeExpenseBoard = () => {
  // Initial state for the tab
  const [tab, setTab] = useState("expense");

  // Initial state for the form data
  const incomeObject = {
    id: crypto.randomUUID(),
    tab: "income",
    category: "Salary",
    income: "",
    date: "",
  };

  const expenseObject = {
    id: crypto.randomUUID(),
    tab: "expense",
    category: "Education",
    expense: "",
    date: "",
  };

  // Initial datasheets for income and expense
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

  const [isAdd, setIsAdd] = useState(true);

  // console.log(singleIncomeStatement, singleExpenseStatement);

  // Changing the tab on click
  const handleTabChange = (e) => {
    if (tab === "income") {
      setSingleIncomeStatement(incomeObject);
      setTab(e.target.textContent.toLowerCase());
    }
    if (tab === "expense") {
      setSingleExpenseStatement(expenseObject);
      setTab(e.target.textContent.toLowerCase());
    }
  };

  // Updating the form data on change
  const handleForm = (e) => {
    const category = e.target.name;
    let value = e.target.value;

    // Converting the value to integer if the category is income or expense
    if (category === "income" || category === "expense") {
      value = parseInt(value);
    }
    if (tab === "income") {
      setSingleIncomeStatement({ ...singleIncomeStatement, [category]: value });
    }
    if (tab === "expense") {
      setSingleExpenseStatement({
        ...singleExpenseStatement,
        [category]: value,
      });
    }
  };

  const handleFormSubmit = (e, isAdd) => {
    e.preventDefault();
    if (isAdd) {
      const id = crypto.randomUUID();
      const data =
        tab === "income" ? singleIncomeStatement : singleExpenseStatement;
      const newData = { ...data, id };
      console.log(newData);
      // console.log(incomeSheet, expenseSheet);

      // Adding new data to the balance incomeSheet based on the tab
      if (tab === "income") {
        setIncomeSheet([...incomeSheet, newData]);
      } else {
        setExpenseSheet([...expenseSheet, newData]);
      }
    } else {
      // Updating the existing data in the incomeSheet based on the tab
      if (tab === "income") {
        const updatedIncomeSheet = incomeSheet.map((item) =>
          item.id === singleIncomeStatement.id ? singleIncomeStatement : item
        );
        console.log(updatedIncomeSheet);
        setIncomeSheet(updatedIncomeSheet);
      } else {
        // Updating the existing data in the expenseSheet based on the tab
        const updatedExpenseSheet = expenseSheet.map((item) =>
          item.id === singleExpenseStatement.id ? singleExpenseStatement : item
        );
        console.log(updatedExpenseSheet);
        setExpenseSheet(updatedExpenseSheet);
      }
    }
  };

  // Sorting the datasheet based on the income or expense
  const handleSort = (isIncomeMenuOpen, isExpenseMenuOpen, sortingType) => {
    console.log("sorting");
    // if (isIncomeMenuOpen) {
    //   if (sortingType === "l2h") {
    //     const sortedData = [...incomeSheet].sort((a, b) => a.income - b.income);
    //     console.log(sortedData);
    //     setIncomeSheet(sortedData);
    //   }
    //   if (sortingType === "h2l") {
    //     const sortedData = [...incomeSheet].sort((a, b) => b.income - a.income);
    //     console.log(sortedData);
    //     setIncomeSheet(sortedData);
    //   }
    // }
    // if (isExpenseMenuOpen) {
    //   if (sortingType === "l2h") {
    //     const sortedData = [...expenseSheet].sort(
    //       (a, b) => a.expense - b.expense
    //     );
    //     console.log(sortedData);
    //     setExpenseSheet(sortedData);
    //   }
    //   if (sortingType === "h2l") {
    //     const sortedData = [...expenseSheet].sort(
    //       (a, b) => b.expense - a.expense
    //     );
    //     console.log(sortedData);
    //     setExpenseSheet(sortedData);
    //   }
    // }
  };

  const handleSortClick = (
    event,
    isIncomeMenuOpen,
    isExpenseMenuOpen,
    sortingType
  ) => {
    event.stopPropagation();
    handleSort(isIncomeMenuOpen, isExpenseMenuOpen, sortingType);
  };

  // Edit the data from the datasheet
  const handleEdit = (id, category) => {
    console.log(id, category);
    setIsAdd(false);
    if (category === "income") {
      const data = incomeSheet.find((item) => item.id === id);
      console.log(data);
      setSingleIncomeStatement({ ...data });
      setTab("income");
      console.log(singleIncomeStatement);
    }

    if (category === "expense") {
      const data = expenseSheet.find((item) => item.id === id);
      console.log(data);
      setSingleExpenseStatement({ ...data });
      setTab("expense");
      console.log(singleExpenseStatement);
    }
    // if (category === "income") {
    //   const editedIncomeSheet = incomeSheet.map((item) =>
    //     item.id === id ? { ...item, income: 5000 } : item
    //   );
    //   setIncomeSheet(editedIncomeSheet);
    // }
    // if (category === "expense") {
    //   const editedExpenseSheet = expenseSheet.map((item) =>
    //     item.id === id ? { ...item, expense: 500 } : item
    //   );
    //   setExpenseSheet(editedExpenseSheet);
    // }
  };

  // Deleting the data from the datasheet
  const handleDelete = (id, category) => {
    if (category === "income") {
      const newIncomeSheet = incomeSheet.filter((item) => item.id !== id);
      setIncomeSheet(newIncomeSheet);
    }
    if (category === "expense") {
      const newExpenseSheet = expenseSheet.filter((item) => item.id !== id);
      setExpenseSheet(newExpenseSheet);
    }
  };

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
          isAdd={isAdd}
        />
        {/* Right column */}
        <RightSideColumn
          incomeSheet={incomeSheet}
          expenseSheet={expenseSheet}
          onSort={handleSortClick}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </section>
    </main>
  );
};
export default IncomeExpenseBoard;
