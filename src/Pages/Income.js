import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchIncome } from "../actions"

export const Income = () => {
    const dispatch = useDispatch()
    const income = useSelector((state) => state.income )
    
    const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0 )

    useEffect(() => {
        dispatch(fetchIncome())}, [dispatch])

    return(
        <div className="entry-page">
            <h1>Income Page</h1>
            {
                income.map((transaction,index) => (
                    <li className="list" key={index} >
                        {transaction.description}: ${transaction.amount}
                    </li>
                ) )
            }
            <h2>Summary</h2>
            <p className="list"><strong>Total Income:</strong> ${totalIncome} </p>
        </div>
    )
}