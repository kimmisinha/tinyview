import React from "react";
import tinyview from "./../../assets/Images/Navbar/tinyview.png";
import { Box } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 120px",
        // border: "2px solid red", 
        backgroundColor: "rgb(255, 255, 255)",
        position: 'fixed', 
        top: 0,           
        left: 0,
      }}
    >
      <img
        src={tinyview}
        alt="tinyview logo"
        style={{ height: "40px", marginRight: "10px" }}
      />
    </Box>
  );
}

export default Navbar;
