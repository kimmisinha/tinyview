import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import appConfig from "../../config/appConfig";
import user from "../../assets/Images/Useimage/UseImage.png";

const drawerWidth = 310;

const UserComponents = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleToggleDropdown = (key) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "rgb(254,248,230)" }}>
      <Box style={{ backgroundColor: "rgb(254,248,230)", zindex: -1000 }}>
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar alt="Guest User" src={user} />
            </ListItemIcon>
            <ListItemText primary="Guest User" secondary="Sign In" />
          </ListItem>
          <ListItemButton>
            <Typography variant="body2" color="primary">
              New user? Sign Up
            </Typography>
          </ListItemButton>
        </List>
        <Divider />
        <List>
          {Object.keys(appConfig.UsersDetails).map((key) => (
            <ListItem key={key}>
              <ListItemButton
                sx={{ "&:hover": { bgcolor: "rgb(255,255,255)" } }}
              >
                <ListItemIcon>
                  <img
                    src={appConfig.UsersDetails[key].icon}
                    alt={appConfig.UsersDetails[key].label}
                    style={{ width: "24px", height: "24px" }} // Fixed size for images
                  />
                </ListItemIcon>
                <ListItemText primary={appConfig.UsersDetails[key].label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Object.keys(appConfig.UsersAccount).map((key) => (
            <React.Fragment key={key}>
              <ListItem>
                <ListItemButton
                  sx={{ "&:hover": { bgcolor: "rgb(255,255,255)" } }}
                  onClick={() => handleToggleDropdown(key)}
                >
                  <ListItemIcon>
                    <img
                      src={appConfig.UsersAccount[key].icon}
                      alt={appConfig.UsersAccount[key].label}
                      style={{ width: "24px", height: "24px" }} // Fixed size for images
                    />
                  </ListItemIcon>
                  <ListItemText primary={appConfig.UsersAccount[key].label} />
                </ListItemButton>
              </ListItem>
              <Collapse in={openDropdowns[key]} timeout="auto" unmountOnExit>
                <List component="div">
                  {key === "subscribe" && (
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Subscribe" />
                    </ListItemButton>
                  )}
                  {key === "account" && (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Invite Friends" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="See Friends" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Friend Requests" />
                      </ListItemButton>
                    </>
                  )}
                  {key === "settings" && (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Settings" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Manage Alerts" />
                      </ListItemButton>
                    </>
                  )}
                  {key === "legal" && (
                    <>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Terms of Use" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Privacy Details" />
                      </ListItemButton>
                    </>
                  )}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default UserComponents;
