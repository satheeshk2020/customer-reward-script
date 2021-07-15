import React from 'react';
import './transaction.css';

class Transaction extends React.Component {
    state = {  }

    render() { 
       const {monthData} = this.props;
        return ( 
        <table className="table">
            {this.createTable(monthData)}
        </table>
        
         );
         
    }
    createTable = (data) => {
        let table = []
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    
        // Outer loop to create parent
        for (let d in data) {

          let children = []
          //Inner loop to create children
          
            children.push(<td>{monthNames[data[d].month]}</td>)
            children.push(<td>{data[d].total}</td>)

          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }
}
 
export default Transaction;