import React, { useState } from "react";
import axios from "axios";
//import styled from "styled-components";
import { Button, Container } from 'react-bootstrap';
//import home1 from '../image/home1.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import NavBar from './LNavBar';


const AddOnlinePayment = (props) => {
    const history = useHistory();

    const [onlinepayDetails, setonlinepayDetails] = useState({
        Account_H_Name: "",
        Account_No: "",
        Contact: "",
        Amount: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setonlinepayDetails({
            ...onlinepayDetails,
            [name]: value
        })
    };
//submit form
const { Account_H_Name, Account_No, Contact, Amount } = onlinepayDetails;
    const onSubmit = (e) => {
        e.preventDefault();

            axios.post("http://localhost:8000/opayments/add", onlinepayDetails).then((res) => {
                if (res.data.success) {
                    setonlinepayDetails({
                        Account_H_Name: "",
                        Account_No: "",
                        Contact: "",
                        Amount: ""

                    })
                }
                history.push('/opayments');
            });
        }

    return (
       
            <div className="container1">
                <div class="topnav">
                    <a class="active" href="/">Home</a>
                    <a href="/payment">All Payment Details</a>
                    <a href="/payment/add">Add Employee Salary</a>
                    <a href="/payment/opayments">Online Payments</a>
                    <a href="/payment/opayments/add">Add Online Payments</a>
                </div>
                <br></br>
                <center>
                <h2> Add New Online Payment </h2>
                </center>
                <br></br>
                <form className="Lform">
                    <div style={{background:"hsl(0,0%,0%,0.7)", padding:"15px"}}> 
                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt" className="form-control" name="Account_H_Name" placeholder="Account Holder Name" value={onlinepayDetails.Account_H_Name}
                            onChange={handleInputChange} />
                        {errors.Account_H_Name && <p className="Lerror" > {errors.Account_H_Name} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="Account_No"
                            placeholder="Account Number"
                            value={onlinepayDetails.Account_No}
                            onChange={handleInputChange}
                        />
                        {errors.Account_No && <p className="Lerror" >{errors.Account_No} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="Contact"
                            placeholder="Contact"
                            value={onlinepayDetails.Contact}
                            onChange={handleInputChange} />
                        {errors.Contact && <p className="Lerror" >{errors.Contact} </p>}
                    </div>

                    <div className="form-group">
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="Amount"
                            placeholder="Amount"
                            value={onlinepayDetails.Amount}
                            onChange={handleInputChange} />
                        {errors.Amount && <p className="Lerror" > {errors.Amount}</p>}
                    </div>
                    <br></br>
                    <Button type="submit" variant="primary" size="sm" onClick={onSubmit} className="LButton"> Pay </Button>
                    </div>
                </form>
            </div>
    )    

}



export default AddOnlinePayment;