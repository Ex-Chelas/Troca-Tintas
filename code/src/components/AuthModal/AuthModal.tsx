import React, { useState } from 'react';
import Modal from 'react-modal';
import './AuthModal.css'; // Ensure this file exists and is correctly linked

Modal.setAppElement('#root'); // Avoid accessibility warnings

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={isSignup ? 'Sign Up' : 'Log In'}
      className="auth-modal"
      overlayClassName="auth-modal-overlay"
    >
      <div className="modal-header">
        <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          {isSignup && (
            <div className="input-group">
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
          )}
          <button type="submit" className="submit-button">
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <p className="toggle-text">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span className="toggle-link" onClick={toggleMode}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default AuthModal;
