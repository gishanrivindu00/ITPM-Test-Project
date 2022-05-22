import React, {Component} from 'react'
import axios from 'axios';

class EditAgent extends Component {

    constructor(props){
        super(props);
        this.state={
            Agent_ID :"",
            Agent_Name :"",
            District :"",
            Telephone_No :""

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

        const {Agent_ID,Agent_Name,District,Telephone_No} = this.state;

        const data ={

            Agent_ID:Agent_ID,
            Agent_Name:Agent_Name,
            District:District,
            Telephone_No:Telephone_No
            
        };

        console.log(data)

        axios.put(`http://localhost:8000/sales/agents/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Agent Updated successfully")
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


    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/sales/agents/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    Agent_ID:res.data.agents.Agent_ID,
                    Agent_Name:res.data.agents.Agent_Name,
                    District:res.data.agents.District,
                    Telephone_No:res.data.agents.Telephone_No

                });
    
                console.log(this.state.agents);
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
                    <a href="/sales/agents/add">Add New Agent</a>
                    <a href="/sales/saleschart">Sales Chart</a>
                </div>
            <div className="col-md-8 mt-4 mx-auto">
            <h2 className="text-center">Edit Agent</h2>
            <div className="Addui">
            <form onSubmit={this.onSubmit}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Agent ID </label>
                <input type="text" 
                className="form-control"
                name="Agent_ID"
                placeholder="Enter Agent_ID"
                value={this.state.Agent_ID}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Agent Name </label>
                <input type="text" 
                className="form-control"
                name="Agent_Name"
                placeholder="Enter Agent_Name"
                value={this.state.Agent_Name}
                onChange={this.handleInputChange} />
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> District </label>
                <input type="text" 
                className="form-control"
                name="District"
                placeholder="Enter District"
                value={this.state.District}
                onChange={this.handleInputChange} />
            </div>

<div className="form-group" style={{marginBottom:'15px'}}>
                <label className="form-label" style={{marginBottom:'5px'}}> Telephone_No </label>
                <input type="text" 
                className="form-control"
                name="Telephone_No"
                placeholder="Enter Telephone_No"
                value={this.state.Telephone_No}
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

export default EditAgent;