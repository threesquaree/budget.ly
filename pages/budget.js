import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import { Chart } from "chart.js";


const ExpenseForm = ({ onExpenseAdded }) => {
  const router = useRouter();
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Accepted",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, {
          data: [10, 21, 60, 44, 17, 21, 17],
          label: "Pending",
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }, {
          data: [6, 3, 2, 2, 7, 0, 16],
          label: "Rejected",
          borderColor: "#c45850",
          backgroundColor: "#d78f89",
          fill: false,
        }
        ]
      },
    });
  }, [])

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/mongodb');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  };


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
    <>
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
            <button
                type="button"
                className="btn btn-secondary ml-2 p-8"
              >
                Report
              </button>
          </div>
        </form>
      </div>
      <div className="relative w-4/5 h-96 shadow-md bg-white rounded-lg border border-gray-300 top-40 right-20 p-4 mx-6">
       {/* line chart */}
       <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default ExpenseForm;
