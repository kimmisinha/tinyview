import React, { useEffect, useState } from "react";
import CustomCardList from "../CardComponents/CustomCardList";
import UserComponets from "../UserComponents/UserComponets";
import Navbar from "../Navbar/Navbar";
import AllSeriesComponent from "../AllSeriesComponent/AllSeriesComponent";
import { useTheme, useMediaQuery } from "@mui/material";

function Homecomponent() {
  const theme = useTheme();
  const showCustomCardList = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ display: "flex" }}>
      {showCustomCardList ? (
        <CustomCardList />
      ) : (
        <>
          <Navbar />

          <UserComponets />
          <CustomCardList />
          <AllSeriesComponent />
        </>
      )}
    </div>
  );
}

export default Homecomponent;
