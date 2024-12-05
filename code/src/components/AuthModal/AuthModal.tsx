import React, { useState } from 'react';
import Modal from 'react-modal';

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
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark semi-transparent background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        },
        content: {
          position: 'relative',
          background: 'white',
          borderRadius: '8px',
          padding: '20px',
          width: '90%',
          maxWidth: '400px',
          maxHeight: '80vh',
          overflowY: 'auto', // Enable vertical scrolling if needed
          margin: '0 auto',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          border: 'none',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0 }}>{isSignup ? 'Sign Up' : 'Log In'}</h2>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#888',
            transition: 'color 0.2s ease-in-out',
          }}
        >
          &times;
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <form>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
            <label style={{ fontSize: '14px', color: '#555' }}>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                padding: '8px',
                fontSize: '14px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
            <label style={{ fontSize: '14px', color: '#555' }}>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              style={{
                padding: '8px',
                fontSize: '14px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          {isSignup && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
              <label style={{ fontSize: '14px', color: '#555' }}>Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
                style={{
                  padding: '8px',
                  fontSize: '14px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
          )}
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              fontSize: '14px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <p style={{ fontSize: '12px', color: '#555' }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={toggleMode}
            style={{
              color: '#007bff',
              cursor: 'pointer',
              textDecoration: 'underline',
              transition: 'color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#007bff')}
          >
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default AuthModal;
