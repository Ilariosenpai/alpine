import React from 'react';
import logo from '../../sources-homepage/logo/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand" href="#"> <img src={logo}/> </Link>
    <Link to='/configure' class="btn btn-outline-primary">Configurateur</Link> 
  </div>
</nav>

    );
}

export default Navbar;
