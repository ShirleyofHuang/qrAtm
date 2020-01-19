import React, { useState } from 'react';
import ModalB from './modellogin';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form
} from 'reactstrap';

import './header.css';


export class Header extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            const isTop = window.scrollY > 100;
            const nav = document.getElementById('nav');
            if (isTop){
                nav.classList.add('scrolled');
            }else{
                nav.classList.remove('scrolled');
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    render(){
        return (
            <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
             <div className="newnavbar" >
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            
            <div className="nav" class="nav">
                 <Navbar expand="md" fixed="top" position="fixed" id="nav" class="nav">
                    <NavbarBrand class="navbarcontent" href="/"><h4 class="navbarcontent">QRurrency</h4></NavbarBrand>
                    <Nav className="mr-auto" class="navbar" navbar>
                        <NavItem>
                        <NavLink class="navbarcontent"href="/components/"><h5 class="navbarcontent">.WIDTHDRAW MONEY</h5></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink class="navbarcontent"href="https://github.com/ShirleyOfHuang"><h5 class="navbarcontent">.SEND MONEY</h5></NavLink>
                        </NavItem>
                        
                    </Nav>
                    <ModalB></ModalB>                   
                </Navbar>
                </div>
                </div>
                </div>
            /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Widthdraw Money</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Send Money</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          </div> */
        )
    }
}


export default Header;