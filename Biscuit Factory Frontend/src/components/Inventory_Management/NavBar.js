import React, { Component } from 'react';

class  NavBar extends Component {
    render() {
        return (
          <div class="topnav">
          <a class="active" href="/">Inventory Management</a>
          <a href="/">Dashboard</a>
          <a href="/add">Add New Inventory</a>
          <a class="active" href="/item">Dashboard</a>
          <a href="/item/add_item">Add Item</a>
          <a href="/item/categories">Categories</a>
          <a href="/item/add_category">Add Category</a>
        </div>
        );
    }
}

export default NavBar;

