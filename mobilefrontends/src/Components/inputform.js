import React, { useState} from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './inputform.css';
// import {Example} from './modal';
import ModalExample from './modal';




export class InputForm extends React.Component{
    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
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
            <div>
                <br></br>
                <br></br>
                <h2>WIDTHDRAW MONEY</h2>
            </div>
            <div class='column' className='widthdrawal'>
            <div class="col align-self-center">
            <form>
            <div class="d-flex justify-content-center">
                <div class="row">
                <label for="inputAmount" className="inputAmount">
                    <br></br>
                    Enter Amount
                    </label>
                <input type="number" class="form-control" id="inputAmount" aria-describedby="emailHelp" placeholder="Enter Amount to Widthdraw" />
                <br></br>
                <br></br>
                {/* <button class="btn btn-light" type="submit">Create QR code</button>     */}
                <ModalExample></ModalExample>
                </div>
                
                
                <br></br>            
                <br></br>
            </div>
            </form>
            </div>
            </div>
            </div>
          
            )
            }
            }
