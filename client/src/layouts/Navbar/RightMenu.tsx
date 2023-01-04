import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, MenuItem, Typography } from "@mui/material";

export default function RightMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [login, setLogin] = useState<boolean>(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const getAccessToken = sessionStorage.getItem("access_token") ?? false;

  useEffect(() => {
    if (!getAccessToken) {
      setLogin(false);
      console.log("false");
    } else {
      setLogin(true);
      console.log("true");
    }
  }, []);

  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        id="primary-search-account-menu-mobile"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {login ? (
          <>
            <MenuItem component={RouterLink} to="/profile">
              <Typography noWrap component="div" textAlign="center">
                Profile
              </Typography>
            </MenuItem>
            <MenuItem component={RouterLink} to="/auth/login">
              <Typography noWrap component="div" textAlign="center">
                Logout
              </Typography>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem component={RouterLink} to="/auth/login">
              <Typography noWrap component="div" textAlign="center">
                Login
              </Typography>
            </MenuItem>
            <MenuItem component={RouterLink} to="/auth/register">
              <Typography noWrap component="div" textAlign="center">
                Register
              </Typography>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
