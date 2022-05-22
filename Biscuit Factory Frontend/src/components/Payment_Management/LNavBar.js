import React, { Component } from 'react';

class  NavBar extends Component {
    render() {
        return (
          <div class="topnav">
          <a class="active" href="/">Home</a>
          <a href="/payment">All Payment Details</a>
          <a href="/payment/add">Add Employee Salary</a>
          <a href="/payment/onlinee">Online Payment</a>
          <a href="/payment/online/add">Add Online Payment</a>
        </div>
        );
    }
}

export default NavBar;

