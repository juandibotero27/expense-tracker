import React, { useContext } from 'react';
import CountContext from '../context';

const Transaction = ({transaction, storage}) => {
    const transactions = useContext(CountContext)

    
    return (
        <li className={transaction.amount > 0 ? 'plus': 'minus'} >
        {transaction.text} <span>${transaction.amount}</span><button className='delete-btn' onClick={(e) => storage(transactions.filter(x => x.id != transaction.id))
        }>x</button>
        </li>
    )


}

export default Transaction;