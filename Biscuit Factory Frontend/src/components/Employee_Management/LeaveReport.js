import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import axios from 'axios';



class LeaveReport extends Component {

    constructor(props) {
        super(props);
        
        this.state={
          posts:[]
        };
      }
    
    
      componentDidMount(){
        this.retrievePosts();
      }
    
      retrievePosts(){
        axios.get("http://localhost:8000/post").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
    
            console.log(this.state.posts)
          }
        });
      }

      
    render() {
        return (
            <div className="container1">
            
              <div class="topnav">
              <a class="active" href="/">Home</a>
                    <a  href="/emp">DashBoard</a>
                    <a  href="/emp/add">Add Employee</a>
                    <a href="/emp/leave/create">Create Leave</a>
                    <a href="/emp/leave">View Leaves</a>
                 </div>
              <br/>
           <h2 style={{color:"white"}}>Do you want to get a report?</h2>
              <br/>
          <h2><center>Employee Report</center></h2>
          <ReactToPrint
            trigger={() => (
            <button
            type="button"
            class="btn btn-danger"
            style={{ marginInlineStart: "85%" }}
            >
            <i class="fas fa-print mr-2"></i>Print this out!
            </button>
            )}
            content={() => this.componentRef}
          />

          <table id="Report" className="table table-success table-striped" style={{marginTop:'40px'}} ref={(Component) => (this.componentRef = Component)}>
            <thead>
              <tr >
                <th scope="col">#</th>  
                <th scope="col">NIC No</th>  
                <th scope="col">From Date</th> 
                <th scope="col">To Date</th> 
                <th scope="col">Leave Type</th>
                <th scope="col">Description</th>            
              </tr>  
            </thead>  

            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{posts.nicNo}</td>
                  <td>{posts.fromDate}</td>
                  <td>{posts.toDate}</td>
                  <td>{posts.typeOfLeave}</td>
                  <td>{posts.description}</td>
                </tr>
              ))}

            </tbody>

          </table>
        
      </div>
    );
  }
}

export default LeaveReport;
