import React from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './balance.css';
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
    UncontrolledCollapse,
    Button,
    Card, 
    CardBody
  } from 'reactstrap';

export class Balance extends React.Component{

    render(){  
        return (
            <div>
            <div className="Projects">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
            </div>
            <div class='column' className='balance'>
           
            <div>
                <br></br>
                <h2>MY BALANCE</h2>
                        <Button color="secondary" id="toggler1" style={{ marginBottom: '1rem' }}>
                        Show Me the Money!
                        </Button>
                        <UncontrolledCollapse toggler="#toggler1">
                        <Card>
                            <CardBody>
                           1234567
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br>
                        </br>
                        <br>
                        </br>
                    </div>
           
            </div>
            </div>
        );
    }
}