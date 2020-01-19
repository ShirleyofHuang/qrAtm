import React from 'react';
import { Parallax, Background } from 'react-parallax';
// import laptop from '../ParalaxPics/laptopcafe.jpg';
import './givemoney.css';

export class GiveMoney extends React.Component{
    sendMessage(){

        var accountSid = 'ACOUNTSID';
        var authToken = 'AUTHTOKEN';

        var client = require('twilio')(accountSid, authToken);

        client.messages.create({ 
            to: phoneNumber,
            from: "+6475699381",
            body: "Hellow from Twilio?",
        }, function(err, message) {
            console.log(message.sid);
        }); 
    }

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
            </div>
        )
    }
}