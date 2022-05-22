import React, { Component } from 'react'
import axios from 'axios'
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

class AddSales extends Component {

    constructor(props){
        super(props);
        this.state={
            Sales_ID :"",
            Item_Name :"",
            Quantity :"",
            Price :"",
            Total_Amount :"",
            Sale_Date :"",
          validated:false
        
        };
    }

    handleInputChange= (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

   

    onSubmit = (e) =>{

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }
        else{
    

        e.preventDefault();

        const id = this.props.match.params.id;

        const {Sales_ID,Item_Name,Quantity,Price,Total_Amount,Sale_Date} = this.state;
     
            const data ={

                Sales_ID:Sales_ID,
                Item_Name:Item_Name,
                Quantity:Quantity,
                Price:Price,
                Total_Amount:Total_Amount,
                Sale_Date:Sale_Date
                
            };
    
            console.log(data)
    
            axios.post(`http://localhost:8000/sales/add`,data).then((res) =>{
                if(res.data.success){
                    alert("Sale added Successfully")
                    window.location.replace("/sales")
                    this.setState(
                        {
                            Sales_ID :"",
                            Item_Name :"",
                            Quantity :"",
                            Price :"",
                            Total_Amount :"",
                            Sale_Date :""
                        }
                    )
                }
            })  
      
    }
    this.setState({ validated: true })
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
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="text-center">Add New Sale</h2>
            <div className="Addui">
            <Form noValidate validated={this.state.validated} onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Sales ID : </label>
                <input type="text" 
                className="form-control"
                name="Sales_ID"
                placeholder="Enter Sales_ID"
                required
                value={this.state.Sales_ID}
                onChange={this.handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
Please Enter Sales IDs
</Form.Control.Feedback> 
              
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Item Name :  </label>
                <input type="text" 
                className="form-control"
                name="Item_Name"
                required
                placeholder="Enter Item_Name"
                value={this.state.Item_Name}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Item Name
</Form.Control.Feedback> 
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Quantity : </label>
                <input type="text" 
                className="form-control"
                name="Quantity"
                required
                placeholder="Enter Quantity"
                value={this.state.Quantity}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Quantity
</Form.Control.Feedback> 
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Price : </label>
                <input type="text" 
                className="form-control"
                required
                name="Price"
                placeholder="Enter Price"
                value={this.state.Price}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Price
</Form.Control.Feedback> 
            </div>

            <div style={{ marginTop: "30px", display: 'flex', flexDirection: 'row' }}>
              <h4 className="text">Total Amount : </h4>
              <h4 className="text">{(this.state.Quantity * this.state.Price)}</h4>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Sale Date : </label>
                <input type="date" 
                className="form-control"
                name="Sale_Date"
                required
                placeholder="Enter Sale Date"
                value={this.state.Sale_Date}
                onChange={this.handleInputChange} 
                />
                <Form.Control.Feedback type="invalid">
Please Enter the Date
</Form.Control.Feedback> 
               
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Save
            </button>
            </Form>
            </div>
            </div>
            </div>
        );
    }
}

export default AddSales;