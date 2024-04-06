export const fetchIncome = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADNIG" });
        const response = await fetch ("https://6ce9f8fc-6355-47ee-82f1-0ea528f1feaa-00-1n126go7cf3vd.worf.replit.dev/income")
        const data = await response.json();
        dispatch({type:"FETCH_INCOME_SUCCESS", payload: data })
    }
    catch (error) {
        console.log("Error fetching income data:", error)
        dispatch({type: "FETCH_INCOME_FAILURE"})
    }
}

export const fetchSavings = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADNIG" })
        const response = await fetch("https://6ce9f8fc-6355-47ee-82f1-0ea528f1feaa-00-1n126go7cf3vd.worf.replit.dev/savings")
        const data = await response.json();
        dispatch({type: "FETCH_EXPENSES_SUCCESS", payload: data })
    }
    catch (error) {
        console.log("Error fetching savings data:", error)
        dispatch({type: "FETCH_EXPENSES_FAILURE" })
    }
}

export const fetchExpenses = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADNIG" })
        const response = await fetch("https://6ce9f8fc-6355-47ee-82f1-0ea528f1feaa-00-1n126go7cf3vd.worf.replit.dev/expenses")
        const data = await response.json();
        dispatch({type: "FETCH_SAVINGS_SUCCESS", payload: data})
    }
    catch (error) {
        console.log("Errro fetching expense data:", error)
        dispatch({type: "FETCH_SAVINGS_FAILURE" })
    }
}



export const addIncome = (amount) => {
    return {
      type: "ADD_INCOME",
      payload: amount
    };
  };
  
  export const addExpense = (amount) => {
    return {
      type: "ADD_EXPENSE",
      payload: amount
    };
  };
  
