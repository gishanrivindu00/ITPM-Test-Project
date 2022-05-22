import React, { Component } from 'react';
import axios from 'axios';

class SalesList extends Component {
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

onDelete = (id) =>{

  
  axios.delete(`http://localhost:8000/sales/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveSales();
  })

}

filterData(sales,searchKey){

  const result = sales.filter((post) =>
  post.Item_Name.toLowerCase().includes(searchKey)
  )

  this.setState({sales:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/sales").then(res =>{
    if(res.data.success){
     
        this.filterData(res.data.existingSales,searchKey)
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
        <div className="ss"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input></div>
        <h2><center>All Sales Details</center></h2>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sales_ID</th>
              <th scope="col">Item_Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total_Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales.map((sales,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/saless/${sales._id}`} style={{textDecoration:'none'}}>
                    {sales.Sales_ID}
                    </a>
                </td>
                <td>{sales.Item_Name}</td>
                <td>{sales.Quantity}</td>
                <td>{sales.Price}</td>
                <td>{(sales.Quantity * sales.Price)}</td>
                <td>{sales.Sale_Date}</td>
                <td>
                  <a className="btn btn-warning" href={`/sales/edit/${sales._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(sales._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>        
        <button type="button" class="btn btn-primary"> <a href="/sales/report" style={{textDecoration: "none", color:"white"}}>Generate Report</a></button>
      </div>
    );
  }
}


export default SalesList;
