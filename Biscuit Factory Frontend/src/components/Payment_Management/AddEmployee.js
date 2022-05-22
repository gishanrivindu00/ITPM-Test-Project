import React, { useState } from "react";
import axios from "axios";
//import styled from "styled-components";
import { Button, Container } from 'react-bootstrap';
//import home1 from '../image/home1.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import validation from './validation';
import NavBar from './LNavBar';


const AddEmployee = (props) => {
    const history = useHistory();

    const [empDetails, setempDetails] = useState({
        clas: "",
        name: "",
        basicPay: "",
        travelAllowance: "",
        otAllowance: "",
        bankAccountNo: "",
        totalSalary: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setempDetails({
            ...empDetails,
            [name]: value
        })
    };
//submit form
    const onSubmit = (e) => {
        e.preventDefault();
        let err = validation(empDetails);
        console.log(err);
        setErrors(err);
        if (Object.keys(err).length == 0) {
            const { clas, name, basicPay, travelAllowance, otAllowance, bankAccountNo, totalSalary } = empDetails;
            const data = {
                clas: clas,
                name: name,
                basicPay: basicPay,
                travelAllowance: travelAllowance,
                otAllowance: otAllowance,
                bankAccountNo: bankAccountNo,
                totalSalary: totalSalary
            }
            axios.post("http://localhost:8000/payment/add", data).then((res) => {
                if (res.data.success) {
                    setempDetails({
                        clas: "",
                        name: "",
                        basicPay: "",
                        travelAllowance: "",
                        otAllowance: "",
                        bankAccountNo: "",
                        totalSalary: ""

                    })
                }
                history.push('/payment');
            });
        }
    };

    return (
       
            <div className="container1">
                <div class="topnav">
                    <a class="active" href="/">Home</a>
                    <a href="/payment">All Payment Details</a>
                    <a href="/payment/add">Add Employee Salary</a>
                    <a href="/payment/buyitems">Buy Items</a>
                </div>
                <br></br>
                <center>
                <h2> Add New Salary Details </h2>
                </center>
                <br></br>
                <form className="Lform">
                    <div style={{background:"hsl(0,0%,0%,0.7)", padding:"15px"}}> 
                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt" className="form-control" name="clas" placeholder="Enter Your Class" value={empDetails.clas}
                            onChange={handleInputChange} />
                        {errors.clas && <p className="Lerror" > {errors.clas} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="name"
                            placeholder="Enter Your Name"
                            value={empDetails.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className="Lerror" >{errors.name} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="basicPay"
                            placeholder="Basic Pay"
                            value={empDetails.basicPay}
                            onChange={handleInputChange} />
                        {errors.basicPay && <p className="Lerror" >{errors.basicPay} </p>}
                    </div>

                    <div className="form-group">
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="travelAllowance"
                            placeholder="Travel Allowance"
                            value={empDetails.travelAllowance}
                            onChange={handleInputChange} />
                        {errors.travelAllowance && <p className="Lerror" > {errors.travelAllowance}</p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="otAllowance"
                            placeholder="OT Allowance"
                            value={empDetails.otAllowance}
                            onChange={handleInputChange} />
                        {errors.otAllowance && <p className="Lerror"> {errors.otAllowance} </p>}
                    </div>

                    <div className="form-group" id="bankAccount" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="bankAccountNo"
                            placeholder="Enter Your Bank Account No"
                            value={empDetails.bankAccountNo}
                            onChange={handleInputChange} />
                        {errors.bankAccountNo && <p className="Lerror"> {errors.bankAccountNo} </p>}
                    </div>

                    <div className="form-group" >
                        <label style={{ marginBottom: '15px' }} > </label>
                        <input type="txt"
                            className="form-control"
                            name="totalSalary"
                            placeholder="Total Salary"
                            value={empDetails.totalSalary}
                            onChange={handleInputChange} />
                        {errors.totalSalary && <p className="Lerror"> {errors.totalSalary} </p>}
                    </div>
                    
                    <br></br>
                    <Button type="submit" variant="primary" size="sm" onClick={onSubmit} className="LButton"> Save </Button>
                    </div>
                </form>
            </div>
    )    

}



export default AddEmployee;