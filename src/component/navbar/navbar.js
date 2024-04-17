import React from 'react';
import logo from '../../sources-homepage/logo/logo.png';
import './navbar.css';


function Navbar() {

    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img src={logo}/> </a>
    <a href='configurateur.js'> <button type="button" class="btn btn-outline-primary">Configurateur</button> </a>
   
  </div>
</nav>

    );
}

export default Navbar;
