import React from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './parallaxpic.css';

export class ParallaxPic extends React.Component{

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
              
                <main class="wrapper">
                <section class="section parallax bg1">
                    <div class="boxed">
                    <h1>WELCOME,</h1>
                    <h3 class="introduction">TO THE FUTURE OF ATMS</h3>
                    </div>
                </section>
                </main>  
            </div>
            </div>       


        
           

      
        )
    }
}