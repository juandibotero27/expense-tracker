import React, {useContext} from 'react';
import CountContext from '../context';

const Expenses = () => {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const transactions = useContext(CountContext)

    const amounts = transactions.map(transaction => parseFloat(transaction.amount))
    
    const income = amounts.filter(income => income > 0).reduce((acc,curVal) => acc += curVal, 0)
    const expenses = amounts.filter(income => income < 0).reduce((acc,curVal) => acc += curVal, 0)
    
    


    return (
        <div className='expense-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>
                    +{USDollar.format(income)}
                </p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='money minus'>
                    {USDollar.format(expenses)}
                </p>
            </div>

        </div>
    )
}

export default Expenses;