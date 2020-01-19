import React from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './balance.css';

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
            <div class="col align-self-center">
                <br></br>
                <h2>MY BALANCE</h2>
            </div>
            <p>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-target
        </button>
        </p>
        <div class="collapse" id="collapseExample">
        <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
        </div>
            </div>
            </div>
        )
    }
}