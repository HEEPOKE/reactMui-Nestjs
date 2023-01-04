import { useState } from "react";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function RightMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <MenuItem>
        <Typography
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
          textAlign="center"
        >
          Logout
        </Typography>
      </MenuItem>
    </Box>
  );
}
