import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './LNavBar';

class OnlinepayAll extends Component {
constructor(props){
  super(props);

  this.state={
    oPay:[]
  };

}

componentDidMount(){
  this.retrieveInventory();
}
//get all inventory
retrieveInventory(){
  axios.get("http://localhost:8000/opayments").then(res =>{
    if(res.data.success){
      this.setState({
        oPay:res.data.existingonlinePayment
      });

      console.log(this.state.oPay)
    }

  });
}

 
  render() {
    return (
      <div className="container1">
       <NavBar/>
       <br/>  <br/>
        <h2><center>All Online Payment Details</center></h2>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Account_H_Name</th>
              <th scope="col">Account_No</th>
              <th scope="col">Contact</th>
              <th scope="col">Amount</th>

            </tr>
          </thead>
          <tbody>
            {this.state.oPay.map((oPay,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>{oPay.Account_H_Name}</td>
                <td>{oPay.Account_No}</td>
                <td>{oPay.Contact}</td>
                <td>{oPay.Amount}</td>
               
              </tr>
            ))}
          </tbody>

        </table>        
     
      </div>
    );
  }
}


export default OnlinepayAll;
