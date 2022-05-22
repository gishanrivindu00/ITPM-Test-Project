import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';

class Home extends Component {
constructor(props){
  super(props);

  this.state={
    inventory:[]
  };

}
//retrive all inventory
componentDidMount(){
  this.retrieveInventory();
}
//get all inventory
retrieveInventory(){
  axios.get("http://localhost:8000/inventory").then(res =>{
    if(res.data.success){
      this.setState({
        inventory:res.data.existingInventory
      });

      console.log(this.state.inventory)
    }

  });
}
 
  render() {
    return (
      <div className="container1">
         <div class="topnav">    
         <a class="active" href="/">Home</a>    
                    <a href="/inventory">Dashboard</a>
                    <a href="/inventory/add">Add New Inventory</a>
        </div>
        <h2 style={{color:"white"}}>Do you want to get a Report?</h2>
        <h2><center>All Inventory Details</center></h2>
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
              <th scope="col">Inventory_ID</th>
              <th scope="col">Inventory_Name</th>
              <th scope="col">Inventory_Quantity</th>
              <th scope="col">Supplier_Name</th>
              <th scope="col">Supplier_Email</th>
              <th scope="col">Supplier_ContactNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inventory.map((inventory,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/inventory/${inventory._id}`} style={{textDecoration:'none'}}>
                    {inventory.Inventory_ID}
                    </a>
                </td>
                <td>{inventory.Inventory_Name}</td>
                <td>{inventory.Inventory_Quantity}</td>
                <td>{inventory.Supplier_Name}</td>
                <td>{inventory.Supplier_Email}</td>
                <td>{inventory.Supplier_ContactNo}</td>
              </tr>
            ))}
          </tbody>

        </table>        
      </div>
    );
  }
}


export default Home;
