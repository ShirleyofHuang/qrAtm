import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import './qrscan.css';
import ModalExample from './modalping';

export class QRscan extends Component {
  state = {
    result: 'No result'
  }

  state = {
      verified: 0
  }



  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        verified: "failed"
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="scanner">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
        <ModalExample thing={this.state.result}></ModalExample>
      </div>
    )
  }
}