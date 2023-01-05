import { Box, Typography } from "@mui/material";

export default function HeaderProduct() {
  return (
    <Box
      sx={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h3">
        Product List
      </Typography>
    </Box>
  );
}
