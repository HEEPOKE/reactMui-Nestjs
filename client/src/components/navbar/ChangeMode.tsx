import React from "react";
import { Typography, MenuItem } from "@mui/material";

export default function ChangeMode() {

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
