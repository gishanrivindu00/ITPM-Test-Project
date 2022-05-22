import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import NavBar from './LNavBar';
//import styled, { ThemeConsumer } from 'styled-components';


export default function Home(props) {

    const history = useHistory();
    const [employee, setEmployee]=useState([]);

    useEffect(() => {
        retrieveEmployee();
    }, []);

//retrieving existing payments
    const retrieveEmployee=()=>{
        axios.get("http://localhost:8000/payment").then(res =>{
            console.log('===============', res);
            if(res.data.success){
                setEmployee(res.data.existingemployee);
                console.log(employee);
            }
        });
    }

    const onDelete = (id) =>{
        axios.delete("http://localhost:8000/payment/delete/"+id).then((res) =>{
            alert("delete Successfully");
            retrieveEmployee();
        })

    }

       const filterData =(employee,searchKey)=>{
        const result = employee.filter((employee)=>employee.name.toLowerCase().includes(searchKey))
        console.log(result);
        setEmployee(result);
        
       };
    
     const handleSearchArea = (e) =>{
      e.preventDefault();
      const searchKey = e.currentTarget.value;
         axios.get("http://localhost:8000/payment").then(res =>{
       if(res.data.success){
        filterData(res.data.existingemployee,searchKey)
        }
      
    });
};

    const navigateReport = () => {
        history.push(
            "/payment/report" 
        )
    }

    return (
            <div>
                <NavBar/>
            <div className = "container" style={{minHeight:"800px"}}>
            
            <div className = " search box" style={{marginTop:"40px"}}>
                <input
                    className = "form-control me-2"
                    type="search"
                    placeholder = "Search"
                    name="searchQuery"
                    onChange={handleSearchArea}
                    style={{width:"250px",marginInlineStart:"80%"}} 
                />
            </div>
        <br/>
        <h2><center>All Payment Details</center></h2>
        <table className="table table-success table-striped" style={{marginTop:'40px'}}>
          <thead>
            <tr>
                <th scope = "col">#</th>
                <th scope = "col">Class</th>
                <th scope = "col">Full Name</th>
                <th scope = "col">Basic Pay</th>
                <th scope = "col">Travel Allowance</th>
                <th scope = "col">OT Allowance</th>
                <th scope = "col">Bank Account No</th>
                <th scope = "col">Total Salary</th>
                <th scope = "col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.length>0 && employee.map((employees,index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td><a href={`/payment/get/${employees._id}`} style={{textDecoration:'none'}}>
                    {employees.clas}</a></td>
                <td>
                    {employees.name}
                    </td>
                        <td>{employees.basicPay}</td>                                            
                        <td>{employees.travelAllowance}</td>
                        <td>{employees.otAllowance}</td>
                        <td>{employees.bankAccountNo}</td>
                        <td>{employees.totalSalary}</td>
                <td>
                  <a className="btn btn-warning" href={'/payment/update/'+employees._id}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=> onDelete(employees._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>

                </td>

              </tr>
            ))}
          </tbody>

        </table>        
                <Button 
                    variant="success"  
                    class="btn btn-primary"
                    style={{textDecoration:'none',color:'black'}} 
                    onClick={navigateReport} 
                >
                    Generate Report
                </Button>
                
            </div>
            </div>
    )
}






