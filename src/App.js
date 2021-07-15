import React from 'react';
import Transactions from './components/transactions';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      transactions:
       [
        {id: 1, customer: "John", amount: 100, date: new Date('06/17/2021')},
        {id: 2, customer: "Mark", amount: 300, date: new Date('05/21/2021')},
        {id: 3, customer: "Luc", amount: 100, date: new Date()},
        {id: 4, customer: "Paul", amount: 150, date: new Date('06/10/2021')},
        {id: 5, customer: "John", amount: 100, date: new Date()},
        {id: 6, customer: "Paul", amount: 60, date: new Date()},
        {id: 7, customer: "Paul", amount: 50, date: new Date('05/21/2021')},
        {id: 8, customer: "Alice", amount: 120, date: new Date()},
        {id: 9, customer: "Alice", amount: 120, date: new Date('06/05/2021')},
        {id: 10, customer: "Mark", amount: 70, date: new Date()},
        {id: 11, customer: "Luc", amount: 125, date: new Date('05/12/2021')},
      ]
    }
  }
  render(){
    return (
      <React.Fragment>
        <div id='custreward'>
        <h1><span className="badge badge-secondary">Customer Rewards Application</span></h1>
        </div>
        <Transactions transactions={this.state.transactions}/>
      </React.Fragment>
      );
  }
  
}

export default App;
