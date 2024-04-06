import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchIncome } from "./actions"

export const Income = () => {
    const dispatch = useDispatch()
    const income = useSelector((state) => state.income )
    
    const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0 )

    useEffect(() => {fetchIncome()}, [dispatch])

    return(
        <div>
            <h1>Income Page</h1>
            {
                income.map((transaction,index) => (
                    <li key={index} >
                        {transaction.description}: ${transaction.amount}
                    </li>
                ) )
            }
            <h2>Summary</h2>
            <h4>Toatl Income: ${totalIncome} </h4>
        </div>
    )
}