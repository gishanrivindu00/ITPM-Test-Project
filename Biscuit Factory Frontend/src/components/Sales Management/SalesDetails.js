import React, { Component } from 'react';
import axios from 'axios';





class SalesDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/sales/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.sales
                });

                console.log(this.state.post);
            }
        });
    }


    render() {

        const {Sales_ID,Item_Name,Quantity,Price,Sale_Date} = this.state.post;
        return (

        <div className="container1">
                <div class="topnav">
                <a class="active" href="/">Home</a>
                    <a href="/sales">All Sales</a>
                    <a href="/sales/add">Create a Sale</a>
                    <a href="/sales/agents">Agent Details</a>
                    <a href="/sales/saleschart">Sales Chart</a>
                 </div>
            <div className="ui2">
            <h4>{'Sales Details'}</h4>
            <hr/>
                <table class="table table-success table-striped">
                    <dl className="row">

                         <dt className="col-sm-3 text-left">Sales ID</dt>
                        <dd className="col-sm-9">{Sales_ID}</dd>
                        
                        <dt className="col-sm-3 text-left">Item Name</dt>
                        <dd className="col-sm-9">{Item_Name}</dd>
               
                        <dt className="col-sm-3 text-left">Quantity</dt>
                        <dd className="col-sm-9">{Quantity}</dd>
                        
                        <dt className="col-sm-3 text-left">Price</dt>
                        <dd className="col-sm-9">{Price}</dd>
                        
                        <dt className="col-sm-3 text-left">Total_Amount</dt>
                        <dd className="col-sm-9">{Quantity*Price}</dd>
                        
                        <dt className="col-sm-3 text-left">Date</dt>
                        <dd className="col-sm-9">{Sale_Date}</dd>
                        
                    </dl>
                </table>
                <a href="/sales">
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

export default SalesDetails;
