import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link as RouterLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavbarCommon() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [login, setLogin] = useState<boolean>(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const getAccessToken = sessionStorage.getItem("access_token") ?? false;

  useEffect(() => {
    if (!getAccessToken) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
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
          <MenuItem>
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
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <MenuItem component={RouterLink} to="/">
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              textAlign="center"
            >
              HOME
            </Typography>
          </MenuItem>
          <MenuItem component={RouterLink} to="/product">
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              textAlign="center"
            >
              PRODUCT
            </Typography>
          </MenuItem>
          <MenuItem component={RouterLink} to="/about">
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              textAlign="center"
            >
              ABOUT
            </Typography>
          </MenuItem>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
