import React from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './givemoney.css';

export class GiveMoney extends React.Component{

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
            <div class='column' className='send'>
            <div class="col align-self-center">
                <br></br>
                <h2>SEND MONEY</h2>
            <form>
            <div class="d-flex justify-content-center">
                <div class="row">
                <label for="inputAmount" className="amount">
                    <br></br>
                    Enter Amount To Transfer
                    </label>
                <input type="number" className="send" class="form-control" id="inputAmount" aria-describedby="emailHelp" placeholder="Enter Amount to Widthdraw" />
                <br></br>
                
                <label for="emailReceive" className="email">
                    <br></br>
                    Enter Person's Email
                    </label>
                <input type="email" class="form-control" id="emailReceive" aria-describedby="emailHelp" placeholder="Enter Person's Email" />
                <button class="btn btn-light" type="submit">Send QR Code</button>    
                
                </div>
                </div>
                </form>
            </div>
            </div>
            </div>
            )
            }
            }