import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/header';
import {ParallaxPic} from './Components/parallaxpic';
import {InputForm} from './Components/inputform';
import {GiveMoney} from './Components/givemoney';
import {QRscanner} from './Components/qrscanner';
import {Qread} from './Components/qrreader';
import {Balance} from './Components/balance'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ParallaxPic></ParallaxPic>
      <InputForm></InputForm>
      <br></br>
      <br></br>
      <GiveMoney></GiveMoney>
      <Balance></Balance>
      {/* <Qread></Qread> */}
      {/* <QRscanner></QRscanner> */}
    </div>
  );
}

export default App;
