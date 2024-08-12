// import React from "react";
// import CustomCardList from "../CardComponents/CustomCardList";
// import UserComponets from "../UserComponents/UserComponets";
// import Navbar from "../Navbar/Navbar";
// import AllSeriesComponent from "../AllSeriesComponent/AllSeriesComponent";
// import { useTheme, useMediaQuery, Box } from "@mui/material";

// function Homecomponent() {
//   const theme = useTheme();
//   const showCustomCardList = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     // <Box
//         <Box display="flex" width="100%">
//           <Navbar />
//           <UserComponets />
//           <CustomCardList />
//           <AllSeriesComponent />
//         </Box>
//       // )}
//     // </Box>
//   );
// }

// export default Homecomponent;


import React from "react";
import CustomCardList from "../CardComponents/CustomCardList";
import UserComponets from "../UserComponents/UserComponets";
import Navbar from "../Navbar/Navbar";
import AllSeriesComponent from "../AllSeriesComponent/AllSeriesComponent";
import { useTheme, useMediaQuery, Box } from "@mui/material";

function Homecomponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Check if the screen is medium or smaller

  return (
    <Box >
      {isSmallScreen ? (
        <Box width="100%">
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


