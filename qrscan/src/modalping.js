import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
// const ModalExample = ({result, className}) => {
//     if (result !== "No result") {
//         return (
//             <div>
//             {/* <Button color="light" onClick={toggle}>{buttonLabel}LOG IN or SIGN UP</Button> */}
//             <Modal isOpen={modal} toggle={toggle} className={className}>
//                 <ModalHeader toggle={toggle}>Verification Success</ModalHeader>
//                 <ModalBody>
//                 <form class="login">
//                     <p>Authentication</p>
                        
//                 </form>
//                     {/* <img src={fake} width='30%' height="30%"></img> */}
//                 {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
//                 </ModalBody>
//                 <ModalFooter>
//                 {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
//                 <Button color="secondary" onClick={toggle}>Close</Button>
//                 </ModalFooter>
//             </Modal>
//             </div>
//         );
//     }
// }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="light" onClick={toggle}>{buttonLabel}LOG IN or SIGN UP</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Verification Success</ModalHeader>
        <ModalBody>
        <form class="login">
            <p>Authentication</p>
                
        </form>
            {/* <img src={fake} width='30%' height="30%"></img> */}
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

// ModalExample.propTypes = {
//     result: PropTypes.string.isRequired
// };

export default ModalExample;
