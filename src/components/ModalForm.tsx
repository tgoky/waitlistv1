import React, { useState } from 'react';
import '../styles/ModalForm.css';

interface ModalFormProps {
  show: boolean;
  handleClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email); // Replace this with your desired email handling logic
    handleClose();
  };

  if (!show) return null; // Only render the modal if 'show' is true

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={handleClose}>&times;</button>
        <h2>Join Our Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
