import React, { useContext } from 'react';
import CountContext from '../context';
import Transaction from './transaction';

const History = ({storage}) => {

    const transactions = useContext(CountContext)

    

    return (
        <div>
            <h3>History</h3>
            <ul className='transactions'>
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} key={transaction.id} storage={storage}/>
                    
                ))}

            </ul>
        </div>
    )
}

export default History;