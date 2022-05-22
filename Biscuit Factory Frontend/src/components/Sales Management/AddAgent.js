import React, { Component } from 'react'
import axios from 'axios'
import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

class AddAgent extends Component {

    constructor(props){
        super(props);
        this.state={
            Agent_ID :"",
            Agent_Name :"",
            District :"",
            Telephone_No :"",
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

        const {Agent_ID,Agent_Name,District,Telephone_No} = this.state;
     
            const data ={

                Agent_ID:Agent_ID,
                Agent_Name:Agent_Name,
                District:District,
                Telephone_No:Telephone_No
                
            };
    
            console.log(data)
    
            axios.post(`http://localhost:8000/sales/agents/add`,data).then((res) =>{
                if(res.data.success){
                    alert("Agent added Successfully")
                    window.location.replace("/sales/agents")
                    this.setState(
                        {
                            Agent_ID :"",
                            Agent_Name :"",
                            District :"",
                            Telephone_No :""
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
                    <a href="/sales/agents/add">Add New Agent</a>
                    <a href="/sales/saleschart">Sales Chart</a>   
                </div>
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Add New Agent</h2>
            <div className="Addui">
            <Form noValidate validated={this.state.validated} onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Agent ID : </label>
                <input type="text" 
                className="form-control"
                name="Agent_ID"
                placeholder="Enter Agent_ID"
                required
                value={this.state.Agent_ID}
                onChange={this.handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
Please Enter Agent IDs
</Form.Control.Feedback> 
              
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Agent Name :  </label>
                <input type="text" 
                className="form-control"
                name="Agent_Name"
                required
                placeholder="Enter Agent Name"
                value={this.state.Agent_Name}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Agent Name
</Form.Control.Feedback> 
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> District : </label>
                <input type="text" 
                className="form-control"
                name="District"
                required
                placeholder="Enter District"
                value={this.state.District}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter District
</Form.Control.Feedback> 
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Telephone_No : </label>
                <input type="text" 
                className="form-control"
                required
                name="Telephone_No"
                placeholder="Enter Telephone_No"
                value={this.state.Telephone_No}
                onChange={this.handleInputChange} />
                <Form.Control.Feedback type="invalid">
Please Enter Telephone_No
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

export default AddAgent;