import React from "react";
import CustomCardList from "../CardComponents/CustomCardList";
import UserComponets from "../UserComponents/UserComponets";
import Navbar from "../Navbar/Navbar";
import AllSeriesComponent from "../AllSeriesComponent/AllSeriesComponent";
import { useTheme, useMediaQuery, Box } from "@mui/material";

function Homecomponent() {
  const theme = useTheme();
  const showCustomCardList = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      {showCustomCardList ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CustomCardList />
        </Box>
      ) : (
        <Box display="flex" width="100%">
          <Navbar />
          <UserComponets />
          <CustomCardList />
          <AllSeriesComponent />
        </Box>
      )}
    </Box>
  );
}

export default Homecomponent;
