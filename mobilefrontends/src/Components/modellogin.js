import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modellogin.css';


const ModalB = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div>
      <Button color="light" onClick={toggle}>{buttonLabel}LOG IN or SIGN UP</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log In or Sign Up</ModalHeader>
        <ModalBody>
        <form class="login">
            <div class="d-flex justify-content-center" className="loginbox">
                <div class="row">
                <label for="username" className="username">

                    <h4>Log In</h4>
                    <br></br>
                    Enter Username
                    </label>
                <input type="username" class="form-control" id="inputAmount" aria-describedby="emailHelp" placeholder="Enter Username" />
                <br></br>
               
                <label for="password" className="password">
                    <br></br>
                    Enter Password
                    </label>
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password" />
                </div>
                </div>
                </form>
                <ModalFooter>
                {/* {toggle === true ? (<Button color='secondary' onClick={toggle}>Log In</Button>) : (<h4>Logged In</h4>)} */}
                <Button color='secondary' onClick={toggle}>Log In</Button>
                </ModalFooter>
                <hr></hr>
                <br></br>

                <form>
                <label for="username" className="username">
                <h4>Sign Up</h4>
                <br></br>
                    <br></br>
                    Choose Username
                    </label>
                <input type="username" class="form-control" id="inputAmount" aria-describedby="emailHelp" placeholder="Enter Username" />
                <br></br>
              
                <label for="password" className="password">
                    <br></br>
                    Enter Password
                    </label>
                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password" />
                <label for="number" className="username">
                    <br></br>
                    Enter Card Number
                    </label>
                <input type="number" class="form-control" id="inputAmount" aria-describedby="emailHelp" placeholder="Enter Username" />

                
        </form>
            {/* <img src={fake} width='30%' height="30%"></img> */}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Sign Up</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalB;