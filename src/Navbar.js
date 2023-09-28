import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="fixed" elevation={8} style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="Menu"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" component="div">
          <span style={{ color: "#4285f4" }}>G</span>{" "}
          <span style={{ color: "#0f9d58" }}>D</span>{" "}
          <span style={{ color: "#f4b400" }}>S</span>{" "}
          <span style={{ color: "#db4437" }}>C</span>{" "}
          <span style={{ color: "#000000" }}>AOT</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
