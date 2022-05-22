import React, { Component } from 'react';


class BiscuitFactory extends Component {
    render() {
        return (
            <div>
            <div className='bg'>
                <br></br>
                <h1 style={{color:"yellow"}}><center>Sunkist Biscuit Factory Management System</center></h1>
                <div className="Scontainer">
                    <a href="/inventory">
                    <button className="sbtn btn1">Inventory Management</button>
                    </a>

                    <a href="/emp">
                    <button className="sbtn btn2">Employee Management</button>
                    </a>
                </div>

                <div className="container2">
                    <a href="/payment">
                    <button className="sbtn btn5">Payment Management</button>
                    </a>

                    <a href="/sales">
                    <button className="sbtn btn4">Sales Management</button>
                    </a>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            </div>
        );
    }
}

export default BiscuitFactory;
