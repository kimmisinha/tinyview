import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
function Footer() {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "rgb(255,255,255)",
        borderTop: '1px solid #e0e0e0',
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Following" icon={<CheckBoxIcon />} />
      <BottomNavigationAction label="All Series" icon={<MapIcon />} />
      <BottomNavigationAction
        label="Notifications"
        icon={<NotificationsActiveIcon />}
      />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
export default Footer;
