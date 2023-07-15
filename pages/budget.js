
import { useState } from 'react';
// import { insertExpense, getAllExpenses } from './mongodb';
fetch('/api/mongodb')
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Handle the fetched data here
  })
  .catch((error) => {
    console.error('Error occurred while fetching data:', error);
  });

const ExpenseForm = ({ onExpenseAdded }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const expense = {
      name: expenseName,
      amount: expenseAmount,
      tag: selectedTag,
    };

    try {
      const response = await fetch('/api/mongodb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense),
      });

      if (response.ok) {
        console.log('Expense added successfully!');
        
      } else {
        throw new Error('Error adding expense');
      }
    } catch (error) {
      console.error('Error occurred while adding expense:', error);
    }
    setExpenseName('');
    setExpenseAmount('');
    setSelectedTag('');
  };


  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className='flex flex-col lg:flex-row gap-40 justify-between'>
      <div className="relative w-2/5 h-96 shadow-md bg-silver rounded-lg border border-gray-300 top-40 left-20 p-4 mx-6 flex justify-center items-center">
        <form  onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="expense-name" className="block font-medium">
              Expense Name
            </label>
            <input
              type="text"
              id="expense-name"
              name="expense-name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              className="form-input rounded-lg my-2"
            />
          </div>
          <div>
            <label htmlFor="expense-amount" className="block font-medium">
              Expense Amount
            </label>
            <input
              type="number"
              id="expense-amount"
              name="expense-amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="form-input rounded-lg my-2"
            />
          </div>
          <div className="space-x-2">
            <span className="font-medium">Tags:</span>
            <button
              type="button"
              className={`tag tag-sips ${
                selectedTag === 'SIPs' ? 'tag-selected' : ''
              }`}
              onClick={() => handleTagSelect('SIPs')}
            >
              SIPs
            </button>
            <button
              type="button"
              className={`tag tag-travel ${
                selectedTag === 'Travel' ? 'tag-selected' : ''
              }`}
              onClick={() => handleTagSelect('Travel')}
            >
              Travel
            </button>
            <button
              type="button"
              className={`tag tag-shopping ${
                selectedTag === 'Shopping' ? 'tag-selected' : ''
              }`}
              onClick={() => handleTagSelect('Shopping')}
            >
              Shopping
            </button>
            <button
              type="button"
              className={`tag tag-food ${
                selectedTag === 'Food' ? 'tag-selected' : ''
              }`}
              onClick={() => handleTagSelect('Food')}
            >
              Food
            </button>
            <button
              type="button"
              className={`tag tag-bills ${
                selectedTag === 'Bills' ? 'tag-selected' : ''
              }`}
              onClick={() => handleTagSelect('Bills')}
            >
              Bills
            </button>
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary mt-4">
              Add Expense
            </button>
            <button type="button" className="btn btn-secondary ml-2 p-8">
              Report
            </button>
          </div>
        </form>
      </div>
      <div className="relative w-4/5 h-96 shadow-md bg-white rounded-lg border border-gray-300 top-40 right-20 p-4 mx-6"></div>
    </div>
  );
};

export default ExpenseForm;
