import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
//import styled from "styled-components";
import { Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


class EditDetails extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeclas = this.onChangeclas.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangebasicPay = this.onChangebasicPay.bind(this);
        this.onChangetravelAllowance = this.onChangetravelAllowance.bind(this);
        this.onChangeotAllowance = this.onChangeotAllowance.bind(this);
        this.onChangebankAccountNo = this.onChangebankAccountNo.bind(this);
        this.onChangetotalSalary = this.onChangetotalSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            clas: "",
            name: "",
            basicPay: "",
            travelAllowance: "",
            otAllowance: "",
            bankAccountNo: "",
            totalSalary: ""
        }
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('http://localhost:8000/payment/get/' + this.props.match.params.id)
            .then(response => {
                console.log(response)
                this.setState({
                    clas: response.data.employees.clas,
                    name: response.data.employees.name,
                    basicPay: response.data.employees.basicPay,
                    travelAllowance: response.data.employees.travelAllowance,
                    otAllowance: response.data.employees.otAllowance,
                    bankAccountNo: response.data.employees.bankAccountNo,
                    totalSalary: response.data.employees.totalSalary
                });
            }).catch(function(error) {
                console.log(error);
            })
    }

    onChangeclas(e) {
        this.setState({
            clas: e.target.value
        })
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangebasicPay(e) {
        this.setState({
            basicPay: e.target.value
        });
    }

    onChangetravelAllowance(e) {
        this.setState({
            travelAllowance: e.target.value
        });
    }

    onChangeotAllowance(e) {
        this.setState({
            otAllowance: e.target.value
        });
    }

    onChangebankAccountNo(e) {
        this.setState({
            bankAccountNo: e.target.value
        })
    }

    onChangetotalSalary(e) {
        this.setState({
            totalSalary: e.target.value
        })
    }
//submit form
    onSubmit(e) {
        e.preventDefault();

        const obj = {
            clas: this.state.clas,
            name: this.state.name,
            basicPay: this.state.basicPay,
            travelAllowance: this.state.travelAllowance,
            otAllowance: this.state.otAllowance,
            bankAccountNo: this.state.bankAccountNo,
            totalSalary: this.state.totalSalary
        };
        axios.post('http://localhost:8000/payment/update/' + this.props.match.params.id, obj)
            .then(response => console.log(response.data));

        this.props.history.push('/payment');
    }

    render() {
        return ( 
            <div>
            <div class="topnav">
                    <a class="active" href="/">Home</a>
                    <a href="/payment">All Payment Details</a>
                    <a href="/payment/add">Add Employee Salary</a>
                    <a href="/payment/buyitems">Buy Items</a></div>
            <div className="Lcontainer container" style={{minHeight:"800px"}}>
            <br></br>
            <h2><center>Edit Payment Details</center></h2>
            <br></br>
            <form onSubmit = { this.onSubmit } className="LPform">
            <div style={{background:"hsl(180,100%,50%,0.9)", padding:"15px"}}> 
            <div className = "form-group" >
            
            <label > Class: </label> <input type = "text"
            required className = "form-control"
            value = { this.state.clas }
            onChange = { this.onChangeclas }
            /> </div >

            <div className = "form-group" >
            <label > Name: </label> <input type = "text"
            required className = "form-control"
            value = { this.state.name }
            onChange = { this.onChangename }
            /> </div >

            < div className = "form-group" >
            <label > Basic Pay: </label>  < input type = "text"
            className = "form-control"
            value = { this.state.basicPay }
            onChange = { this.onChangebasicPay }
            /> </div >

            <div className = "form-group" >
            <label > Travel Allowance: </label>  <
            input type = "text"
            className = "form-control"
            value = { this.state.travelAllowance }
            onChange = { this.onChangetravelAllowance }
            /> </div >

            <div className = "form-group" >
            <label > OT Allowance: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.otAllowance }
            onChange = { this.onChangeotAllowance }
            /> </div >

            < div className = "form-group">
            <label > Bank Account Number: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.bankAccountNo }
            onChange = { this.onChangebankAccountNo }/> </div >

            <div className = "form-group" >
            <label > Total Salary: </label> <
            input type = "text"
            className = "form-control"
            value = { this.state.totalSalary }
            onChange = { this.onChangetotalSalary }
            /> </div >

            <div className = "form-group" >
            < input type = "submit"
            value = "Edit"
            className = "btn btn-primary subButton"/>
            </div>
            </div> 
            </form>
            </div>
            </div>
        );
    };
};




export default EditDetails;