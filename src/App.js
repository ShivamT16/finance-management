import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import IncomeExpenseForm from "./Pages/IncomeExpenseForm";
// import FinanceSummary from "./Pages/FinanceSummary";
import {Income} from "./Pages/Income"
import { Expense } from './Pages/Expense';
import { Savings } from './Pages/Savings';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    
      <div className="App">
     <Router>
      <div>
        <nav className='Navigation' >
        <NavLink className="link" to="/">New Entries</NavLink>
        <NavLink className="link" to="income" >Income</NavLink>
        <NavLink className="link" to="expenses" >Expenses</NavLink>
        <NavLink className="link" to="savings" >Savings</NavLink>
        <NavLink className="link" to="dashboard">Finance Summary</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<IncomeExpenseForm />} />
          <Route path="/income" element={<Income />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
     </Router>
      </div>
  );
}

export default App;


