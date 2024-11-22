import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Modal from 'react-modal';
import ShoppingCart from './ShoppingCart';
import { ThemeContext } from "../contexts/ThemeContext";

Modal.setAppElement('#root'); // For accessibility

interface NavbarProps {
  title: string;
  links: { path: string; label: string }[];
  menu?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ title, links, menu }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState<string | null>(null);

  const { mode, toggleTheme } = useContext(ThemeContext); // Access theme context

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
        <AppBar position="static" color="inherit">
          <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: mode === "light" ? "#FF5500" : "#333", // Adapt background color
                color: mode === "light" ? "white" : "#ddd", // Adapt text color
              }}
          >
            {menu && <Box sx={{ mr: 2 }}>{menu}</Box>}

            <Typography variant="h6" component="div" sx={{ textAlign: "center", flexGrow: 1 }}>
              {title}
            </Typography>

            <Box component="nav" sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {links.map((link, index) => (
                  <Link
                      key={index}
                      to={link.path}
                      style={{
                        color: mode === "light" ? "white" : "#ddd",
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
                        sx={{
                          color: mode === "light" ? "white" : "#ddd",
                          fontWeight: "bold",
                          alignSelf: "center",
                        }}
                    >
                      Welcome, {userName}
                    </Typography>
                    <Button
                        style={{
                          color: mode === "light" ? "white" : "#ddd",
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
                          color: mode === "light" ? "white" : "#ddd",
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
                          color: mode === "light" ? "white" : "#ddd",
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

              {/* Theme Toggle Button */}
              <IconButton
                  onClick={toggleTheme}
                  color="inherit"
                  sx={{
                    color: mode === "light" ? "white" : "#ddd",
                  }}
              >
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>

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
                margin: "auto",
                borderRadius: "10px",
                backgroundColor: mode === "light" ? "#f0f0f0" : "#555", // Modal background based on theme
                color: mode === "light" ? "#000" : "#fff", // Text color
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: `2px solid ${mode === "light" ? "#ff6600" : "#999"}`,
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
                  style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
            {isSignup && (
                <div>
                  <label>Confirm Password:</label>
                  <input
                      type="password"
                      required
                      style={{ width: "100%", marginBottom: "10px" }}
                  />
                </div>
            )}
            <button type="submit" style={{ marginRight: "10px" }}>
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
