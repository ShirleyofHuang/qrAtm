import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/header';
import {ParallaxPic} from './Components/parallaxpic';
import {InputForm} from './Components/inputform';
import {GiveMoney} from './Components/givemoney';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ParallaxPic></ParallaxPic>
      <InputForm></InputForm>
      <br></br>
      <br></br>
      <GiveMoney></GiveMoney>
    </div>
  );
}

export default App;
