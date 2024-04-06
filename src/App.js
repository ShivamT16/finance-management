import './App.css';
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import IncomeExpenseForm from "./IncomeExpenseForm";
import FinanceSummary from "./FinanceSummary";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Redux</h1>
        <IncomeExpenseForm />
        <FinanceSummary />
      </div>
    </Provider>
  );
}

export default App;


