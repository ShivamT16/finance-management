import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions";
import "./pages.css"

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('');
  const [entryType, setEntryType] = useState('income')

  const handleAddEntry = (e) => {
   e.preventDefault()

   dispatch(addEntry({description, amount: parseFloat(amount), entryType}))
   setDescription('')
   setAmount('')
   setEntryType('income')
  }

  return (
    <div className="entry-page">
      <h1>New Entry Page</h1>
    <form>
      <div className="label">
        <p className="Label" > Description: </p>
        <input className="input" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="label" >
        <p className="Label" >Amount:</p>
        <input className="input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="label">
        <p className="Label" >Entry Type:</p>
        <select className="input" value={entryType} onChange={(e)=> setEntryType(e.target.value)} >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="savings" >Savings</option>
        </select>
      </div>
      <button onClick={handleAddEntry} >Add Entry</button>
    </form>
    </div>
  );
};

export default IncomeExpenseForm;
