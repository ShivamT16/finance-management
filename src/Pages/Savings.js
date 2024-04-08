import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSavings } from "../actions"

export const Savings = () => {

    const dispatch = useDispatch()
    const savings = useSelector((state) => state.savings)

    const totalSavings = savings.reduce((acc, curr) => curr.amount + acc, 0)

    useEffect(() => {dispatch(fetchSavings())}, [dispatch] )

    return(
        <div className="entry-page">
            <h1>Savings Page</h1>
            {
                savings.map((transaction, index) => 
                <li className="list" key={index}>
                    {transaction.description}: ${transaction.amount}
                </li>
                )
            }
            <h2>Summary</h2>
            <p className="list"><strong>Total Savings:</strong> ${totalSavings} </p>
        </div>
    )
}