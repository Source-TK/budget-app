import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import AddItem from './components/additem';

function App() {

  const [transaction, setTransaction] = useState ([])

  const addTransaction = ((amount, item, transactionType) =>{

    setTransaction ((item) => [...item, {
      amount: amount,
      item: item,
      transactionType: transactionType,
  }])

  console.log (transaction);

  })
  return (
    <div className="container">
      <AddItem add= {addTransaction} />    
     
    </div>
  );
}

export default App;
