import React, { Component } from 'react';
import axios from 'axios';

class InventoryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            inventory:{}
        };
    }
//get invetory by id
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/inventory/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    inventory:res.data.inventory
                });

                console.log(this.state.inventory);
            }

        });
    }

    render() {

        const {Inventory_ID,Inventory_Name,Inventory_Quantity,Supplier_Name,Supplier_Email,Supplier_ContactNo} = this.state.inventory;
        
        return (
            <div className="container1">
                <div class="topnav">
                <a class="active" href="/">Home</a>
                    <a href="/inventory">Dashboard</a>
                    <a href="/inventory/add">Add New Inventory</a>
                </div>
            <div className="background">
            <div style={{marginTop:'20px'}}>
            <h4>{'Inventory Details'}</h4>
            <hr/>
            <dl class="row">
            <dt class="col-sm-3">Inventory_ID</dt>
            <dd class="col-sm-9">{Inventory_ID}</dd> 
               
            <dt class="col-sm-3">Inventory_Name</dt>
            <dd class="col-sm-9">{Inventory_Name}</dd>

            <dt class="col-sm-3">Inventory_Quantity</dt>
            <dd class="col-sm-9">{Inventory_Quantity}</dd>

            <dt class="col-sm-3">Supplier_Name</dt>
            <dd class="col-sm-9">{Supplier_Name}</dd>

            <dt class="col-sm-3">Supplier_Email</dt>
            <dd class="col-sm-9">{Supplier_Email}</dd>

            <dt class="col-sm-3">Supplier_ContactNo</dt>
            <dd class="col-sm-9">{Supplier_ContactNo}</dd>
            
         </dl>
            </div>
            <a href="/inventory">
            <button type="button" class="btn btn-primary">
            <i class="fas fa-arrow-alt-circle-left"></i>    
            &nbsp; Dashboard
            </button>
            </a>
            </div>
            </div>
        );
    }
}

export default InventoryDetails;
