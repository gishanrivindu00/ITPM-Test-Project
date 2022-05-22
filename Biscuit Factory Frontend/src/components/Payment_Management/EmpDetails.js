import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './LNavBar';





class EmpDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/payment/get/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.employees
                });

                console.log(this.state.post);
            }
        });
    }


    render() {

        const { clas,name,basicPay,travelAllowance,otAllowance,bankAccountNo,totalSalary} = this.state.post;
        return (

        <div className="container1">
            <NavBar></NavBar>
        <div className="ui2">
        <h4>{'Payment Details'}</h4>
        <hr/>
        <table class="table table-success table-striped">
            <d1 className = "row">
                <dt className = "col-sm-3 text-left">Class</dt>
                <dd className="col-sm-9">{clas}</dd>

                <dt className = "col-sm-3 text-left">Name</dt>
                <dd className="col-sm-9">{name}</dd>

                <dt className = "col-sm-3 text-left">Basic Pay</dt>
                <dd className="col-sm-9">{basicPay}</dd>

                <dt className = "col-sm-3 text-left">Travel Allowance</dt>
                <dd className="col-sm-9">{travelAllowance}</dd>

                <dt className = "col-sm-3 text-left">OT Allowance</dt>
                <dd className="col-sm-9">{otAllowance}</dd>

                <dt className = "col-sm-3 text-left">Bank Account No</dt>
                <dd className="col-sm-9">{bankAccountNo}</dd>

                <dt className = "col-sm-3 text-left">Total Salary</dt>
                <dd className="col-sm-9">{totalSalary}</dd>
            </d1>
            </table>
                <a href="/payment">
                     <button type="cancel" className="btn btn-primary btn-block" style={{marginLeft:'0px'}} >
                     <i class="fas fa-arrow-alt-circle-left"></i>
                    &nbsp; DashBoard
                     </button>
                </a>
        </div>
        </div>
    );
    }
}



export default EmpDetails;