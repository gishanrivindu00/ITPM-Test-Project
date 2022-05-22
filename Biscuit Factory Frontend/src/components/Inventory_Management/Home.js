import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
constructor(props){
  super(props);

  this.state={
    inventory:[]
  };

}

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

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/inventory/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveInventory();
  })

}

filterData(inventory,searchKey){

  const result = inventory.filter((post) =>
  post.Inventory_ID.toLowerCase().includes(searchKey)||
  post.Inventory_Name.toLowerCase().includes(searchKey)||
  post.Inventory_Quantity.toLowerCase().includes(searchKey)||
  post.Supplier_Name.toLowerCase().includes(searchKey)||
  post.Supplier_Email.toLowerCase().includes(searchKey)||
  post.Supplier_ContactNo.toLowerCase().includes(searchKey)
  )

  this.setState({inventory:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/inventory").then(res =>{
    if(res.data.success){
     
        this.filterData(res.data.existingInventory,searchKey)
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
        <div className="ss"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input></div>
        <h2><center>All Inventory Details</center></h2>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Inventory_ID</th>
              <th scope="col">Inventory_Name</th>
              <th scope="col">Inventory_Quantity</th>
              <th scope="col">Supplier_Name</th>
              <th scope="col">Supplier_Email</th>
              <th scope="col">Supplier_ContactNo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inventory.map((inventory,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/inventoryy/${inventory._id}`} style={{textDecoration:'none'}}>
                    {inventory.Inventory_ID}
                    </a>
                </td>
                <td>{inventory.Inventory_Name}</td>
                <td>{inventory.Inventory_Quantity}</td>
                <td>{inventory.Supplier_Name}</td>
                <td>{inventory.Supplier_Email}</td>
                <td>{inventory.Supplier_ContactNo}</td>
                <td>
                  <a className="btn btn-warning" href={`/inventory/edit/${inventory._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(inventory._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>        
        <button type="button" class="btn btn-primary"> <a href="/inventory/genrep" style={{textDecoration: "none", color:"white"}}>Generate Report</a></button>
      </div>
    );
  }
}


export default Home;
