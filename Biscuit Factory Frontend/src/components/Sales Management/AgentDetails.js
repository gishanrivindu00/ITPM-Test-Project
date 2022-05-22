import React, { Component } from 'react';
import axios from 'axios';

class AgentDetails extends Component {
constructor(props){
  super(props);

  this.state={
    agents:[]
  };

}

componentDidMount(){
  this.retrieveAgents();
}

retrieveAgents(){
  axios.get("http://localhost:8000/agents").then(res =>{
    if(res.data.success){
      this.setState({
        agents:res.data.existingAgents
      });

      console.log(this.state.agents)
    }

  });
}

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/agents/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retrieveAgents();
  })

}

filterData(agents,searchKey){

  const result = agents.filter((post) =>
  post.Agent_ID.toLowerCase().includes(searchKey)||
  post.Agent_Name.toLowerCase().includes(searchKey)||
  post.District.toLowerCase().includes(searchKey)||
  post.Telephone_No.toLowerCase().includes(searchKey)
  )

  this.setState({agents:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/agents").then(res =>{
    if(res.data.success){
     
        this.filterData(res.data.existingAgents,searchKey)
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
        <div className="ss"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input></div>
        <h2><center>All Agent Details</center></h2>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Agent_ID</th>
              <th scope="col">Agent_Name</th>
              <th scope="col">District</th>
              <th scope="col">Telephone_No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.agents.map((agent,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/agents/${agent._id}`} style={{textDecoration:'none'}}>
                    {agent.Agent_ID}
                    </a>
                </td>
                <td>{agent.Agent_Name}</td>
                <td>{agent.District}</td>
                <td>{agent.Telephone_No}</td>
                <td>
                  <a className="btn btn-warning" href={`/agents/edit/${agent._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(agent._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>        
        <button type="button" class="btn btn-primary"> <a href="/sales/genrep" style={{textDecoration: "none", color:"white"}}>Generate Report</a></button>
      </div>
    );
  }
}


export default AgentDetails;
