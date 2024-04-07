export const fetchIncome = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADNIG" });
        const response = await fetch ("https://financial-management-app-eight.vercel.app/income")
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
        const response = await fetch("https://financial-management-app-eight.vercel.app/savings")
        const data = await response.json();
        dispatch({type: "FETCH_SAVINGS_SUCCESS", payload: data})
    }
    catch (error) {
        console.log("Error fetching savings data:", error)
        dispatch({type: "FETCH_SAVINGS_FAILURE" })
    }
}

export const fetchExpenses = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADNIG" })
        const response = await fetch("https://financial-management-app-eight.vercel.app/expenses")
        const data = await response.json();
        dispatch({type: "FETCH_EXPENSES_SUCCESS", payload: data })
    }
    catch (error) {
        console.log("Errro fetching expense data:", error)
        dispatch({type: "FETCH_EXPENSES_FAILURE" })
    }
}

export const addEntry = (entry) => async(dispatch) => {
    console.log(`https://financial-management-app-eight.vercel.app/add-${entry.entryType}`)
    try{
        const response = await fetch(`https://financial-management-app-eight.vercel.app/add-${entry.entryType}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry)
        },
    )
    const data = await response.json()
    console.log(data)
    if (data.success === true) {
        dispatch({type: 'ADD_ENTRY_SUCCESS', payload: data.data})
    } 
   }
    catch(error) {
        console.error('Error adding entry:', error)
        dispatch({type: 'ADD_ENTRY_FAILURE'})
    }
}


  
