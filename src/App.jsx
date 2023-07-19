import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "gray",
          alignItems: "",
          flexDirection: "column",
          flex: "1 1 auto",
        }}
      >
        <Typography variant="h6">Hello World</Typography>
      </Box>
      <Box sx={{ backgroundColor: "red" }}>
        <Typography variant="h6">Hello World</Typography>
      </Box>
      <Box sx={{ backgroundColor: "gray" }}>
        <Typography variant="h6">Hello World</Typography>
      </Box>
      <Box sx={{ backgroundColor: "red" }}>
        <Typography variant="h6">Hello World</Typography>
      </Box>
    </Box>
  );
};

export default App;
