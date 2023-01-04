import React from "react";
import { Typography, MenuItem } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

export default function ChangeMode() {
  const theme = useTheme();
  return (
    <>
      <MenuItem>
        <Typography noWrap component="div" textAlign="center">
          Light mode
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography noWrap component="div" textAlign="center">
          Dark mode
        </Typography>
      </MenuItem>
    </>
  );
}
