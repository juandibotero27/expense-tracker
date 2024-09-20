import React, {useContext, useState} from 'react';
import CountContext from '../context';
import { v4 as uuidv4 } from 'uuid';


const AddTransaction = ({storage}) => {
    const [transaction, setTransaction] = useState('')
    const [amount, setAmount] = useState(1)

    const history = useContext(CountContext)

    

    


    return (
        <div>
            <h3>Anything New ?</h3>
            <form>
                <div className='form-container'>
                    <label htmlFor='transaction'>Transaction</label>
                    <input type='text' value={transaction} onChange={(e) => setTransaction(e.target.value)} ></input>
                </div>
                <div className='form-container'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='number' placeholder="1.0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                </div>
                <button type="button" className='btn' onClick={
                    (e) => {storage([...history, {id: uuidv4(), text: transaction, amount: amount}])}}>ADD</button>
            </form>
        </div> 
    )
}

export default AddTransaction
