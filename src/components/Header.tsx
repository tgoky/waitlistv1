import React, { useState } from 'react';
import ModalForm from './ModalForm';
import '../styles/ModalForm.css';

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="header">
        <h1>Waitlist</h1>
        <div className="button-container">
          <button onClick={handleShow}>Join Waitlist</button>
        </div>
      </header>
      {show && <ModalForm show={show} handleClose={handleClose} />}
    </>
  );
};

export default Header;
