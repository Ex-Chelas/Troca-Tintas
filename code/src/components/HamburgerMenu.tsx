import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

interface NavLink {
    label: string;
    path: string;
}

interface HamburgerMenuProps {
    links: NavLink[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {links.map((link, index) => (
                    <MenuItem key={index} onClick={handleMenuClose}>
                        <Link
                            to={link.path}
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            {link.label}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default HamburgerMenu;
