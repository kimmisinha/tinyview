import React from "react";
import CustomCardList from "../CardComponents/CustomCardList";
import UserComponets from "../UserComponents/UserComponets";
import Navbar from "../Navbar/Navbar";
import AllSeriesComponent from "../AllSeriesComponent/AllSeriesComponent";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import Footer from "../Footer/Footer";
function Homecomponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); 

  return (
    <Box >
      {isSmallScreen ? (
        <Box width="100%">
          <CustomCardList />
          <Footer/>
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


