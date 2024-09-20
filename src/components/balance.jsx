import React, { useCallback, useContext } from 'react';
import CountContext from '../context';
// import {Decimal} from 'decimal.js';

const Balance = () => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const transactions = useContext(CountContext)

    let amounts = transactions.map(transaction => parseFloat(transaction.amount))

    let total = amounts.reduce((acc,currentVal) => (acc += currentVal), 0)










    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{USDollar.format(total)}</h1>
        </div>
    )
}

export default Balance;
