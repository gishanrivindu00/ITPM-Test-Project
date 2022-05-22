import React, {Component} from 'react'
import axios from 'axios';

class EditInventory extends Component {

    constructor(props){
        super(props);
        this.state={
            Inventory_ID :"",
            Inventory_Name :"",
            Inventory_Quantity :"",
            Supplier_Name :"",
            Supplier_Email :"",
            Supplier_ContactNo :""
            

        }
    }

    handleInputChange= (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }
//submit form
    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        const {Inventory_ID,Inventory_Name,Inventory_Quantity,Supplier_Name,Supplier_Email,Supplier_ContactNo} = this.state;

        const data ={

            Inventory_ID:Inventory_ID,
            Inventory_Name:Inventory_Name,
            Inventory_Quantity:Inventory_Quantity,
            Supplier_Name:Supplier_Name,
            Supplier_Email:Supplier_Email,
            Supplier_ContactNo:Supplier_ContactNo
            
        };

        console.log(data)

        axios.put(`http://localhost:8000/inventory/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Inventory Updated successfully")
                window.location.replace("/inventory")
                this.setState(
                    {
                        Inventory_ID :"",
                        Inventory_Name :"",
                        Inventory_Quantity :"",
                        Supplier_Name :"",
                        Supplier_Email :"",
                        Supplier_ContactNo :""
                        
                    }
                )
            }
        })  
    }


    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/inventory/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    Inventory_ID:res.data.inventory.Inventory_ID,
                    Inventory_Name:res.data.inventory.Inventory_Name,
                    Inventory_Quantity:res.data.inventory.Inventory_Quantity,
                    Supplier_Name:res.data.inventory.Supplier_Name,
                    Supplier_Email:res.data.inventory.Supplier_Email,
                    Supplier_ContactNo:res.data.inventory.Supplier_ContactNo

                });
    
                console.log(this.state.inventory);
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
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Edit Inventory</h2>
            <div className="Addui">
            <form onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Inventory ID </label>
                <input type="text" 
                className="form-control"
                name="Inventory_ID"
                placeholder="Enter Inventory_ID"
                value={this.state.Inventory_ID}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Inventory Name </label>
                <input type="text" 
                className="form-control"
                name="Inventory_Name"
                placeholder="Enter Inventory_Name"
                value={this.state.Inventory_Name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Inventory Quantity </label>
                <input type="text" 
                className="form-control"
                name="Inventory_Quantity"
                placeholder="Enter Inventory_Quantity"
                value={this.state.Inventory_Quantity}
                onChange={this.handleInputChange} />
            </div>

<div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier Name </label>
                <input type="text" 
                className="form-control"
                name="Supplier_Name"
                placeholder="Enter Supplier_Name"
                value={this.state.Supplier_Name}
                onChange={this.handleInputChange} />
            </div>
            
            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier Email </label>
                <input type="text" 
                className="form-control"
                name="Supplier_Email"
                placeholder="Enter Supplier Email"
                value={this.state.Supplier_Email}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Supplier ContactNo </label>
                <input type="text" 
                className="form-control"
                name="Supplier_ContactNo"
                placeholder="Enter Supplier_ContactNo"
                value={this.state.Supplier_ContactNo}
                onChange={this.handleInputChange} />
            </div>

            <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} >
            <i className="far fa-check-square"></i>
            &nbsp; Update
            </button>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default EditInventory;