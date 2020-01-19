import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {fake} from './fakeqr.pgn';
import fake from './fakeqr.png';
import {Qread} from './qrreader';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={toggle}>{buttonLabel}{props.button}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.message}</ModalHeader>
        <ModalBody>
            {/* <img src={fake} width='30%' height="30%"></img> */}
            <Qread value="123456789"></Qread>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;