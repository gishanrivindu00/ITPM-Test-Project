import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import NavBar from './LNavBar';

class Home extends Component {
constructor(props){
  super(props);

  this.state={
    stocks:[]
  };

}

componentDidMount(){
  this.retrieveStocks();
}
//get all payments
retrieveStocks(){
  axios.get("http://localhost:8000/payment").then(res =>{
    if(res.data.success){
      this.setState({
        stocks:res.data.existingemployee
      });

      console.log(this.state.stocks)
    }

  });
}
 
  render() {
    return (
      <div className="container1">
        <NavBar/>
        <h2 style={{color:"white"}}>Do you want to get a Report?</h2>
        <h2><center>All Payment Details</center></h2>
        <ReactToPrint
            trigger={() => (
            <button
            type="button"
            class="btn btn-danger"
            style={{ marginInlineStart: "0%" }}
            >
            <i class="fas fa-print mr-2"></i>Print this out!
            </button>
            )}
            content={() => this.componentRef}
          />
        <table className="table table-success table-striped" style={{marginTop:'40px'}} ref={(Component) => (this.componentRef = Component)}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class</th>
              <th scope="col">Name</th>
              <th scope="col">Basic Pay</th>
              <th scope="col">Travel Allowance</th>
              <th scope="col">OT Allowance</th>
              <th scope="col">Bank Account No</th>
              <th scope="col">Total Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map((stocks,index) =>(
              <tr key={index}>
                <td>
                    <a href={`/stock/${stocks._id}`} style={{textDecoration:'none'}}>
                    {stocks.Stock_ID}
                    </a>
                </td>
                <td>{stocks.clas}</td>
                <td>{stocks.name}</td>
                <td>{stocks.basicPay}</td>
                <td>{stocks.travelAllowance}</td>
                <td>{stocks.otAllowance}</td>
                <td>{stocks.bankAccountNo}</td>
                <td>{stocks.totalSalary}</td>
              </tr>
            ))}
          </tbody>

        </table>        
      </div>
    );
  }
}


export default Home;
