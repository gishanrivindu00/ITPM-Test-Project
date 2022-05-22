import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';

class SalesReport extends Component {
constructor(props){
  super(props);

  this.state={
    sales:[]
  };

}

componentDidMount(){
  this.retrieveSales();
}

retrieveSales(){
  axios.get("http://localhost:8000/sales").then(res =>{
    if(res.data.success){
      this.setState({
        sales:res.data.existingSales
      });

      console.log(this.state.sales)
    }

  });
}
 
  render() {
    return (
      <div className="container1">
         <div class="topnav">    
         <a class="active" href="/">Home</a>
                    <a href="/sales">All Sales</a>
                    <a href="/sales/add">Create a Sale</a>
                    <a href="/sales/agents">Agent Details</a>
                    <a href="/sales/saleschart">Sales Chart</a>
        </div>
        <h2 style={{color:"white"}}>Do you want to get a Report?</h2>
        <h2><center>All Sales Details</center></h2>
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
              <th scope="col">Sales_ID</th>
              <th scope="col">Item_Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total_Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales.map((sales,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/sales/${sales._id}`} style={{textDecoration:'none'}}>
                    {sales.Sales_ID}
                    </a>
                </td>
                <td>{sales.Item_Name}</td>
                <td>{sales.Quantity}</td>
                <td>{sales.Price}</td>
                <td>{(sales.Quantity * sales.Price)}</td>
                <td>{sales.Sale_Date}</td>
              </tr>
            ))}
          </tbody>

        </table>        
      </div>
    );
  }
}


export default SalesReport;
