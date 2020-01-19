// import {QRscanner} from './qrscanner';
// import QrReader from 'react-qr-reader';

// import QrReader from 'react-qr-reader';

const e = React.createElement;
// class QRscanner extends React.Component {
//     state = {
//       result: 'No result'
//     }
  
//     handleScan = data => {
//       if (data) {
//         this.setState({
//           result: data
//         })
//       }
//     }
//     handleError = err => {
//       console.error(err)
//     }
//     render() {
//       return (
//         <div className="scanner">
//           <QrReader
//             delay={300}
//             onError={this.handleError}
//             onScan={this.handleScan}
//             style={{ width: '100%' }}
//           />
//           <p>{this.state.result}</p>
//         </div>
//       )
//     }
//   }

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    // <QRscanner></QRscanner>
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);