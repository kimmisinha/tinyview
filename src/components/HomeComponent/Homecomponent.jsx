import React from "react";
import CustomCardList from "../CardComponents/CustomCardList";
import UserComponets from "../UserComponents/UserComponets";
import Navbar from "../Navbar/Navbar";
import AllSeriesComponent from "../AllSeriesComponent/AllSeriesComponent";
function Homecomponent() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <UserComponets />
      <CustomCardList />
      <AllSeriesComponent />
    </div>
  );
}

export default Homecomponent;
