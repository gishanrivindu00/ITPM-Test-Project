import React, { Component } from 'react';

class  NavBar extends Component {
    render() {
        return (
          <div class="topnav">
          <a class="active" href="/">Home</a>
          <a href="/sales">All Sales</a>
          <a href="/sales/add">Create a Sale</a>
          <a href="/sales/agent">Agent Details</a>
          <a href="/sales/saleschart">Sales Chart</a>
        </div>
        );
    }
}

export default NavBar;
