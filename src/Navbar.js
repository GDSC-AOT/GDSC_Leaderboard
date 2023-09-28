import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "./logo.png"; // Import your image here

const Navbar = () => {
  return (
    <AppBar position="fixed" elevation={8} style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="Menu" edge="start">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <img src={logoImage} alt="Logo" style={{ width: "250px", height: "100px" }} />

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
