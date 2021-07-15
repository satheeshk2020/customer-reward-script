import React from 'react';
import Transaction from './transaction';
import './transactions.css';

class Transactions extends React.Component {
    state = {  };
        
    render() { 
        const {transactions} = this.props;
        
        let byCustomer = transactions.reduce((oneCustomer, { customer, amount, date }) => {
            if (!oneCustomer[customer]) oneCustomer[customer] = [];
            oneCustomer[customer].push({amount, date});
            return oneCustomer;
          }, {});
        
          let customerInfos = [];

        for(let customerId in byCustomer){
           
            let perMonth = this.rewardPerMonth(byCustomer[customerId]);
            
            let total = this.getTotalRewards(byCustomer[customerId]);

            customerInfos.push({name: customerId, perMonth: perMonth, total: total});
        }

        return ( 
            <table className="table table-bordered table-striped" id='customerreward'>
                <thead>
                    <tr>
                        <th scope="col">Customer</th>
                        <th scope="col">Rewards Per Month</th>
                        <th scope="col">Total Rewards</th>
                    </tr>
                </thead>
                <tbody>
                {
                    customerInfos.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td id='monthdata'>
                                <Transaction key={item.name} monthData={item.perMonth} />
                            </td>
                            <td>{item.total}</td>
                        </tr>
                ))}
                </tbody>
            </table>
         );
    }

    computeReward(amount) {
        if (amount >=50 && amount < 100) {
            return amount-50;
        } else if (amount >= 100){
            return (2*(amount-100) + 50);
        }
        return 0;
    }
    
    
    getAllTransactions = (transactions) =>{
        return transactions.sort((a,b) => b.date-a.date);
    }
    
    
    getTotalRewards = (transactions) => {
        return transactions.length ? transactions.reduce((acc,key)=>this.computeReward(key.amount)+acc, 0) : 0;
    }
    
    rewardPerMonth  = (transactions) =>{
        let last3MonthRewardsInDesc = [];
        for(let i=0; i<3; i++) {
            let filteredList = transactions.filter(t => t.date.getMonth() === ((new Date())).getMonth() - i );
            last3MonthRewardsInDesc[i] = {month: (new Date()).getMonth() - i , 
                total: filteredList.reduce((acc,key)=>this.computeReward(key.amount)+acc,0)};
        }
        return last3MonthRewardsInDesc;
    }  
}
 
export default Transactions;