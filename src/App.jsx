import React from 'react'
import './App.css'
import Balance from './components/balance'
import Expenses from './components/expenses'
import History from './components/historyList'
import AddTransactions from './components/transactionForm'
import CountContext from './context'
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {




  const [history, setHistory] = useLocalStorage('transactions', [])

  
  

  return (
    <>
    <h2>Expense Tracker</h2>
    <CountContext.Provider value={history}>
      <div className='container'>
        <Balance />
        <Expenses />
        <History storage={setHistory} />
        <AddTransactions storage={setHistory} />
     
      </div>
    </CountContext.Provider>
    </>
  )
}

export default App
