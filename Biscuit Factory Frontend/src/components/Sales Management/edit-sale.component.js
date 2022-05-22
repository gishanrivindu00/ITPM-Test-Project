import React, {Component} from 'react'
import axios from 'axios';

class EditSales extends Component {

    constructor(props){
        super(props);
        this.state={
            Sales_ID :"",
            Item_Name :"",
            Quantity :"",
            Price :"",
            Total_Amount :"",
            Date :""
            

        }
    }

    handleInputChange= (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        const {Sales_ID,Item_Name,Quantity,Price,Total_Amount,Date} = this.state;

        const data ={

          Sales_ID:Sales_ID,
          Item_Name:Item_Name,
          Quantity:Quantity,
          Price:Price,
          Total_Amount:Total_Amount,
          Date:Date
            
        };

        console.log(data)

        axios.put(`http://localhost:8000/sales/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Sale Updated successfully")
                window.location.replace("/sales")
                this.setState(
                    {
                        Sales_ID :"",
                        Item_Name :"",
                        Quantity :"",
                        Price :"",
                        Total_Amount :"",
                        Date :""
                        
                    }
                )
            }
        })  
    }


    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/sales/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    Sales_ID:res.data.sales.Sales_ID,
                    Item_Name:res.data.sales.Item_Name,
                    Quantity:res.data.sales.Quantity,
                    Price:res.data.sales.Price,
                    Total_Amount:res.data.sales.Total_Amount,
                    Date:res.data.sales.Date

                });
    
                console.log(this.state.sales);
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
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="text-center">Edit Sales</h2>
            <div className="Addui">
            <form onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Sales ID </label>
                <input type="text" 
                className="form-control"
                name="Sales_ID"
                placeholder="Enter Sales_ID"
                value={this.state.Sales_ID}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Item Name </label>
                <input type="text" 
                className="form-control"
                name="Item_Name"
                placeholder="Enter Item_Name"
                value={this.state.Item_Name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Quantity </label>
                <input type="text" 
                className="form-control"
                name="Quantity"
                placeholder="Enter Quantity"
                value={this.state.Quantity}
                onChange={this.handleInputChange} />
            </div>

<div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Price </label>
                <input type="text" 
                className="form-control"
                name="Price"
                placeholder="Enter Price"
                value={this.state.Price}
                onChange={this.handleInputChange} />
            </div>
            
            <div style={{ marginTop: "30px", display: 'flex', flexDirection: 'row' }}>
              <h4 className="text">Total Amount : </h4>
              <h4 className="text">{(this.state.Quantity * this.state.Price)}</h4>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Sale Date </label>
                <input type="date" 
                className="form-control"
                name="Sale_Date"
                placeholder="Enter Sale Date"
                value={this.state.Sale_Date}
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

export default EditSales;