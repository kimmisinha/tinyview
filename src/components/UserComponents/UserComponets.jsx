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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import appConfig from "../../config/appConfig";
import user from "../../assets/Images/Useimage/UseImage.png";

const drawerWidth = 350;

const UserComponents = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleToggleDropdown = (key) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgb(254,247,221)",
        zIndex: 0,
        // height: "100vh", // Adjust height as needed
      }}
    >
      <Box sx={{ backgroundColor: "rgb(254,247,221)", width: drawerWidth }}>
        <Toolbar />
        <Divider sx={{ width: "100%", borderColor: "white" }} />
        <List>
          <ListItem>
            <Box sx={{ textAlign: "center" }}>
              <Avatar
                alt="Guest User"
                src={user}
                sx={{
                  width: 100,
                  height: 100,
                  margin: "0 auto",
                  color: "rgb(61,61,61)",
                  paddingLeft: 6,
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mt: 1, color: "rgb(61,61,61)",  paddingLeft: 6, }}
              >
                Guest User
              </Typography>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  // paddingTop: 1,
                  color: "rgb(61,61,61)",
                  fontWeight: 700,
                  fontSize: "17px",
                  paddingLeft: 6,
                }}
              >
                Sign In
              </Typography>
            </Box>
          </ListItem>
          <ListItemButton>
            <Typography
              variant="body2"
              sx={{ fontSize: "1.0rem" ,paddingLeft: 6,}}
            >
              <span style={{ color: "rgb(98,98,98)" }}>New user?</span>
              <span style={{ color: "red", textDecoration: "underline" }}>
                {" "}Sign Up
              </span>
            </Typography>
          </ListItemButton>
        </List>
        <List>
          {Object.keys(appConfig.UsersDetails).map((key) => (
            <ListItem key={key}>
              <ListItemButton
                sx={{ "&:hover": { bgcolor: "rgb(255,255,255)" } }}
              >
                <ListItemIcon>
                  <Box sx={{ width: 32, height: 32 }}>
                    <img
                      src={appConfig.UsersDetails[key].icon}
                      alt={appConfig.UsersDetails[key].label}
                      style={{ width: "70%", height: "70%" }}
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText primary={appConfig.UsersDetails[key].label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ width: "100%", borderColor: "white" }} />
        <List sx={{ paddingTop: "50px" }}>
          {Object.keys(appConfig.UsersAccount).map((key) => (
            <React.Fragment key={key}>
              <ListItem>
                <ListItemButton
                  sx={{
                    "&:hover": { bgcolor: "rgb(255,255,255)" },
                    mb: key === "allseries" ? 2 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={() => handleToggleDropdown(key)}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemIcon>
                      <Box sx={{ width: 32, height: 32 }}>
                        <img
                          src={appConfig.UsersAccount[key].icon}
                          alt={appConfig.UsersAccount[key].label}
                          style={{ width: "70%", height: "70%" }}
                        />
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={appConfig.UsersAccount[key].label} />
                  </Box>
                  {["account", "settings", "legal", "friends"].includes(key) && (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>
              </ListItem>
              {["account", "settings", "legal", "friends"].includes(key) && (
                <Collapse in={openDropdowns[key]} timeout="auto" unmountOnExit>
                  <List component="div" sx={{ pl: 4 }}>
                    {key === "account" && (
                      <>
                        <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{ width: 24, height: 24 }}>
                              <img
                                src={appConfig.UsersAccount.account.actions.subscribe.icon}
                                alt={appConfig.UsersAccount.account.actions.subscribe.label}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary="Subscribe" />
                        </ListItemButton>
                      </>
                    )}
                    {key === "settings" && (
                      <>
                        <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{ width: 24, height: 24 }}>
                              <img
                                src={appConfig.UsersAccount.settings.actions.manageAlerts.icon}
                                alt={appConfig.UsersAccount.settings.actions.manageAlerts.label}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary="Manage Alerts" />
                        </ListItemButton>
                      </>
                    )}
                    {key === "legal" && (
                      <>
                        <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{ width: 24, height: 24 }}>
                              <img
                                src={appConfig.UsersAccount.legal.actions.termsAndConditions.icon}
                                alt={appConfig.UsersAccount.legal.actions.termsAndConditions.label}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary="Terms and Conditions" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{ width: 24, height: 24 }}>
                              <img
                                src={appConfig.UsersAccount.legal.actions.privacyPolicy.icon}
                                alt={appConfig.UsersAccount.legal.actions.privacyPolicy.label}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary="Privacy Policy" />
                        </ListItemButton>
                      </>
                    )}
                    {key === "friends" && (
                      <>
                        <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{ width: 24, height: 24 }}>
                              <img
                                src={appConfig.UsersAccount.friends.actions.inviteFriends.icon}
                                alt={appConfig.UsersAccount.friends.actions.inviteFriends.label}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary="Invite Friends" />
                        </ListItemButton>
                        <ListItemButton>
                          <ListItemIcon>
                            <Box sx={{ width: 24, height: 24 }}>
                              <img
                                src={appConfig.UsersAccount.friends.actions.seeFriends.icon}
                                alt={appConfig.UsersAccount.friends.actions.seeFriends.label}
                                style={{ width: "100%", height: "100%" }}
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText primary="See Friends" />
                        </ListItemButton>
                      </>
                    )}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UserComponents;
