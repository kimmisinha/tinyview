import React from "react";
import tinyview from "./../../assets/Images/Navbar/tinyview.png";
import { Box } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // border: "2px solid red",
        backgroundColor: "white",
        position: "fixed",
        width: "80%",
        // hight:"200px",
        padding:"10px 0px 10px 0px",
        zIndex:10

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
