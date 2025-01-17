# Assignment - 2 (LWS)

## Live Link: https://expense-tracker-assignment-2-lws.vercel.app/

## Requirements:

- When the "Expense Tracker" form on the left is filled out and submitted, based on whether it’s an Expense or Income, the list view and balance summary on the right will update.

- In the "Expense Tracker" form, the user can select the type of transaction by clicking on the Expense or Income tab view. The selected one will have the active class.

- Based on whether Expense or Income is selected, the category list will be updated. If Income is selected, the category list will include: Salary, Outsourcing, Bond, Dividend. If Expense is selected, the categories will include: Education, Food, Health, Bill, Insurance, Tax, Transport, Telephone.

- The balance summary will update with Balance, Total Income, and Total Expense. Whenever a new transaction is created, Balance, Total Income, and Total Expense will update accordingly. The Balance value will be calculated by subtracting Total Expense from Total Income.

- If for any reason the Balance becomes negative, the text color will turn red.

- Both Expense and Income lists can be sorted. Sorting will be done based on the amount.

- Both Expense and Income lists can be filtered based on categories. Ensure that the categories rendered in the filters match the categories listed in the "Expense Tracker" form. The income list's filter options should only include Income categories, and the expense list's filter options should only include Expense categories. If no category is selected, all items should be displayed.

- An "Edit" feature should be available for any transaction. When hovering over a transaction’s amount, an Edit menu will appear. Clicking on "Edit" will populate all the transaction data into the "Expense Tracker" form, where it can be updated.

- Similar to Edit, hovering over a transaction’s amount will also show a Delete menu. Clicking on "Delete" will remove the transaction.

- After editing or deleting a transaction, the balance summary, including the Balance, will update accordingly.

## To Run Locally

1. **Clone the repository:**

   ```
   git clone https://github.com/nasib15/assignment-2-lws
   cd assignment-2-lws
   ```

2. **Install the dependencies:**

   ```
   npm install
   ```

3. **Start the development server:**

   ```
   npm run dev
   ```

### Build for Production:

```
npm run build
```
