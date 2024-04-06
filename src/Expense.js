import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExpenses } from "./actions"

export const Expense = () => {
    const dispatch = useDispatch()
    const expenses = useSelector((state) => state.expenses )

    const totalExpenses = expenses.reduce((acc, curr) => curr.amount + acc, 0)

    useEffect(() => { dispatch(fetchExpenses())}, [dispatch] )

    return (
        <div>
        <h1>Expense Page</h1>
        {
            expenses.map((transaction,index) => 
            <li key={index} > 
                {transaction.description}: ${transaction.amount} </li>
            )
        }
        <h2>Summary</h2>
        <h4>Total Expense: ${totalExpenses} </h4>
        </div>
    )
}