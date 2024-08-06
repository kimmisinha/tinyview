import React from 'react'
import CustomCardList from "../CardComponents/CustomCardList";
import UserComponets from '../UserComponents/UserComponets';
import Navbar  from '../Navbar/Navbar';
function Homecomponent() {
  return (
    <div>
        <Navbar/>
        <UserComponets/>
        <CustomCardList/>
    </div>
  )
}

export default Homecomponent