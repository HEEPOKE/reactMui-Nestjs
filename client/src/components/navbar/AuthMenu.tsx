import { Link as RouterLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";

export default function AuthMenu() {
  return (
    <>
      <MenuItem component={RouterLink} to="/auth/login">
        <Typography
          noWrap
          component="div"
          textAlign="center"
        >
          Login
        </Typography>
      </MenuItem>
      <MenuItem component={RouterLink} to="/auth/register">
        <Typography
          noWrap
          component="div"
          textAlign="center"
        >
          Register
        </Typography>
      </MenuItem>
    </>
  );
}
