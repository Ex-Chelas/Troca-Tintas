import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Typography, Box, Button, IconButton} from "@mui/material";
import Modal from 'react-modal';
import ShoppingCart from './ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";

Modal.setAppElement('#root'); // For accessibility

interface NavbarProps {
  title: string;
  links: { path: string; label: string }[];
  menu?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ title, links, menu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState<string | null>(null);

  const openModal = (signupMode: boolean) => {
    setIsSignup(signupMode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
    setPassword('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const localPart = email.split('@')[0];
    setUserName(localPart);
    closeModal();
    alert(`Welcome, ${localPart}!`);
  };

  const handleSignOut = () => {
    setUserName(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FF5500",
          }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* Hamburger Button */}
                {menu}

                {/* Title Button */}
                <Button
                    onClick={() => (window.location.href = "/")}
                    sx={{
                        textTransform: "none",
                        color: "white",
                        fontSize: "1rem",
                        padding: "4px 8px",
                        minWidth: "auto",
                        ":hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                    }}
                >
                    {title}
                </Button>
            </Box>

          <Box component="nav" sx={{ display: "flex", gap: "10px", alignItems: 'center' }}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {link.label}
              </Link>
            ))}
            {userName ? (
              <>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", fontWeight: "bold", alignSelf: "center" }}
                >
                  Welcome, {userName}
                </Typography>
                <Button
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  color="inherit"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  color="inherit"
                  onClick={() => openModal(false)}
                >
                  Login
                </Button>
                <Button
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  color="inherit"
                  onClick={() => openModal(true)}
                >
                  Sign Up
                </Button>
              </>
            )}
            {/* Include ShoppingCart here */}
            <ShoppingCart />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal for Login/Sign Up */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={isSignup ? "Sign Up" : "Login"}
        style={{
          content: {
            maxWidth: "400px",
            margin: 'auto',
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
            padding: '20px',
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "2px solid #ff6600",
          },
        }}
      >
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </div>
          {isSignup && (
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                required
                style={{ width: '100%', marginBottom: '10px' }}
              />
            </div>
          )}
          <button type="submit" style={{ marginRight: '10px' }}>
            {isSignup ? "Sign Up" : "Login"}
          </button>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
